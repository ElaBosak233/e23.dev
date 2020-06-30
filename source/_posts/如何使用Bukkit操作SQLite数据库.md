title: 如何使用Bukkit操作SQLite数据库
date: 2020-06-30
categories: MineCraft
tags:
  - 经验总结
  - Bukkit / Spigot
  - MineCraft
  - SQLite
---
编写*Bukkit*和*Spigot*插件时，经常遇到存储永久数据困难的情况，大多时候我会用*Json*来解决此问题，但是*Json*经常出现读写速度慢、代码复杂的情况，但可以达到相同目标的**_SQLite_**数据库能轻松解决问题，可以尝试使用下面的方法对**_SQLite_**进行控制：
<!-- more -->
## ⭐**控制类**SQLite.java

```java
public class SQLite {

    //※可忽视，这里定义了Bukkit插件主类Main为plugin
    static Main plugin;
    
    //创建+链接数据库 CONNECT
    public static Connection getConnection() throws SQLException {
        SQLiteConfig config = new SQLiteConfig();
        config.setSharedCache(true);
        config.enableRecursiveTriggers(true);
        SQLiteDataSource ds = new SQLiteDataSource(config);
        //你可以命名"jdbc:sqlite:"后面的数据库文件名称，程序运行时若无此文件，会自动创建
        ds.setUrl("jdbc:sqlite:Database.db");
        return ds.getConnection();
    }

    //创建表操作 CREATE TABLE
    public void createTable(Connection con)throws SQLException {
        //⭐这里需要自定义数据类型和数据数量
        String sql = "DROP TABLE IF EXISTS sqlite ;create table sqlite (uuid String, sqlite String); ";
        Statement stat = null;
        stat = con.createStatement();
        stat.executeUpdate(sql);

    }

    //完全删除表操作 DROP TABLE
    public void dropTable(Connection con)throws SQLException {
        String sql = "drop table sqlite ";
        Statement stat = null;
        stat = con.createStatement();
        stat.executeUpdate(sql);
    }

    //新增操作 INSERT
    public void insert(Connection con, UUID uuid, String sqlite)throws SQLException {
        String sql = "insert into sqlite (uuid,sqlite) values(?,?)";
        PreparedStatement pst = null;
        pst = con.prepareStatement(sql);
        int idx = 1 ;
        pst.setString(idx++, uuid.toString());
        pst.setString(idx++, sqlite);
        pst.executeUpdate();

    }

    //修改操作 UPDATE
    public void update(Connection con, UUID uuid, String sqlite)throws SQLException {
        String sql = "update sqlite set sqlite = ? where uuid = ?";
        PreparedStatement pst = null;
        pst = con.prepareStatement(sql);
        int idx = 1 ;
        pst.setString(idx++, sqlite);
        pst.setString(idx++, uuid.toString());
        pst.executeUpdate();
    }

    //刪除操作 DELETE
    public void delete(Connection con,UUID uuid)throws SQLException {
        String sql = "delete from sqlite where uuid = ?";
        PreparedStatement pst = null;
        pst = con.prepareStatement(sql);
        int idx = 1 ;
        pst.setString(idx++, uuid.toString());
        pst.executeUpdate();
    }
    
    //查找操作 SELECT
    public static void  selectAll(Connection con)throws SQLException {
        String sql = "select * from sqlite";
        Statement stat = null;
        ResultSet rs = null;
        stat = con.createStatement();
        rs = stat.executeQuery(sql);
        while(rs.next())
        {
            String uuid = rs.getString("uuid");
            String sqlite = rs.getString("sqlite");
            plugin.data.put(uuid,sqlite);
            System.out.println(rs.getString("uuid")+"\t"+rs.getString("sqlite"));
        }
    }
}
```

## **使用案例**【测试性案例】

```java
    import SQLite;
    public static void main(String args[]) throws SQLException {
       SQLite sqlite = new SQLite();
       Connection con = sqlite.getConnection();
       //建立表
       sqlite.createTable(con);
       //新增数据
       sqlite.insert(con, "First", "一");
       sqlite.insert(con, "Second", "二");
       //查询数据
       sqlite.selectAll(con);
       //修改数据
       sqlite.update(con, "First", "壹");
       //删除数据
       sqlite.delete(con, 1);
       //完全删除表
       sqlite.dropTable(con);
       //⭐⭐⭐断开连接，重点，养成好习惯，用完数据库就断开
       con.close();
   }
```