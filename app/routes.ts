import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/layout.tsx", [
    index("routes/index.tsx"),
    route("friends", "routes/friends/index.tsx"),
    route("articles", "routes/articles/index.tsx"),
    route("about", "routes/about/index.tsx"),
  ]),
  route("*", "routes/[...].tsx"),
] satisfies RouteConfig;
