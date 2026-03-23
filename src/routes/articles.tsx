import { createFileRoute } from "@tanstack/react-router";
import { ConstructionIcon } from "lucide-react";
import { cn } from "@/utils";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      {
        title: "Articles - E23.DEV",
      },
    ],
  }),
  component: Articles,
});

function Articles() {
  return (
    <div
      className={cn([
        "flex-1",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "gap-5",
      ])}
    >
      <img
        src="/ela/discovering.png"
        alt="Discovering"
        width={128}
        draggable={false}
      />
      <div className={cn(["flex", "justify-center", "items-center", "gap-2"])}>
        <ConstructionIcon />
        <span>Still under development</span>
      </div>
    </div>
  );
}
