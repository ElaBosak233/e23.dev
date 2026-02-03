"use client";

import { cn } from "@/utils";

function AnimatedTitle() {
  return (
    <>
      <span
        className={cn(["font-sans", "text-md", "text-secondary-foreground"])}
      >
        {"//"}
      </span>
      <span className={cn(["font-sans", "text-md", "font-semibold"])}>
        E23.DEV
      </span>
    </>
  );
}

export { AnimatedTitle };
