import { ConstructionIcon } from "lucide-react";
import { cn } from "@/utils";
import type { Route } from "./+types/index";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Articles - E23.DEV" }];
}

export default function Articles() {
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
        src="/discovering.png"
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
