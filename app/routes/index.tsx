import { cn } from "@/utils";
import type { Route } from "./+types/index";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "E23.DEV" },
    // { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div
      className={cn([
        "mx-10",
        "flex-1",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "select-none",
      ])}
    >
      <div className={cn(["flex", "flex-col"])}>
        <span
          className={cn([
            "text-green-600",
            "dark:text-green-400",
            "my-2",
            "font-semibold",
            "font-mono",
          ])}
        >
          Hi, this is
        </span>
        <span
          className={cn([
            "text-sky-600",
            "dark:text-sky-400",
            "mb-2",
            "text-3xl",
            "md:text-8xl",
            "font-bold",
            "font-serif",
          ])}
        >
          @ElaBosak233
        </span>
        <span
          className={cn([
            "text-red-400",
            "dark:text-red-300",
            "mb-4",
            "text-6xl",
            "font-bold",
            "font-serif",
          ])}
        >
          <span>A </span>
          <span className={cn("text-pink-400", "dark:text-pink-200")}>
            Pegasus
          </span>
          <span> & </span>
          <span className={cn("text-sky-400", "dark:text-sky-200")}>
            Developer
          </span>
        </span>
        <div className={cn(["mb-4"])}>Hoof to heart!</div>
      </div>
    </div>
  );
}
