import { FriendCard } from "@/components/widgets/friend-card";
import { cn } from "@/utils";
import type { Route } from "./+types/index";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Friends - E23.DEV" }];
}

export default function Friends() {
  return (
    <div
      className={cn([
        [
          "no-select",
          "w-full",
          "max-w-5xl",
          "mx-auto",
          "h-full",
          "px-6",
          "md:px-10",
          "lg:px-12",
          "py-10",
          "md:py-12",
          "xl:py-16",
          "flex",
          "flex-col",
          "gap-5",
        ],
      ])}
    >
      <div className={cn(["flex", "justify-end"])}>
        <span className={cn(["italic", "text-secondary-foreground"])}>
          Friendship is Magic!
        </span>
      </div>
      <div
        className={cn([
          "space-y-6",
          "md:space-y-0",
          "md:gap-6",
          "md:grid",
          "md:grid-cols-12",
          "md:grid-flow-row",
        ])}
      >
        <FriendCard
          name="tdiant"
          avatar="https://avatars.githubusercontent.com/u/22428650"
          description={
            "Former MCBBS programming section moderator, also the author of BDN."
          }
          link={
            <a
              href="https://nyan.best/"
              className="hover:text-cyan-500 hover:underline"
              target="_blank"
              rel="noopener"
            >
              https://nyan.best
            </a>
          }
          className={cn([
            "col-span-5",
            "shadow-cyan-600/50",
            "dark:shadow-cyan-500/50",
          ])}
        />
        <FriendCard
          name="Lesnow Ye"
          avatar="https://avatars.githubusercontent.com/u/40481418"
          description={
            "A member of former MCBBS BoneStudio, who is currently studying Engineering."
          }
          link={
            <a
              href="https://lesnow.top/"
              className="hover:text-indigo-500 hover:underline"
              target="_blank"
              rel="noopener"
            >
              https://lesnow.top
            </a>
          }
          className={cn([
            "col-span-7",
            "shadow-indigo-600/50",
            "dark:shadow-indigo-500/50",
          ])}
        />
        <FriendCard
          name="KawaiiYoumu"
          avatar="https://cos-shanghai-01-1301223281.cos.ap-shanghai.myqcloud.com/box/imgs/youmu-header.webp"
          description={
            "From his blog, it is clear that he is studying medicine."
          }
          link={
            <a
              href="https://blog.konpaku.cn/"
              className="hover:text-pink-500 hover:underline"
              target="_blank"
              rel="noopener"
            >
              https://blog.konpaku.cn
            </a>
          }
          className={cn([
            "col-span-7",
            "shadow-pink-600/50",
            "dark:shadow-pink-500/50",
          ])}
        />
        <FriendCard
          name="Zerol Acqua"
          avatar="https://cdn.zerolacqua.top/images/avatar.png"
          description={"A really adorable unicorn who skills water magic."}
          link={
            <a
              href="https://zerolacqua.top/"
              className="hover:text-emerald-500 hover:underline"
              target="_blank"
              rel="noopener"
            >
              https://zerolacqua.top
            </a>
          }
          className={cn([
            "col-span-5",
            "shadow-emerald-600/50",
            "shadow-emerald-500/50",
          ])}
        />
        <FriendCard
          name="Lenny Chen"
          avatar="https://s2.loli.net/2024/03/31/Ht3QBqhgLYNAuwj.png"
          description={
            "A friend who is passionate about the law. (MLP also, so we get to know each other.)"
          }
          link={
            <a
              href="https://lennychen.top/"
              className="hover:text-indigo-500 hover:underline"
              target="_blank"
              rel="noopener"
            >
              https://lennychen.top
            </a>
          }
          className={cn([
            "col-span-5",
            "shadow-indigo-600/50",
            "shadow-indigo-500/50",
          ])}
        />
      </div>
    </div>
  );
}
