"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils";

function AnimatedTitle() {
  const [title, setTitle] = useState<string>("e23.dev");

  useEffect(() => {
    const interval = setInterval(() => {
      if (title === "e23.dev") {
        setTitle("e23.dev_");
      } else {
        setTitle("e23.dev");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [title]);

  return (
    <>
      <span
        className={cn(["font-sans", "text-md", "text-secondary-foreground"])}
      >
        {"//"}
      </span>
      <span className={cn(["font-sans", "text-md", "font-semibold"])}>
        {title}
      </span>
    </>
  );
}

export { AnimatedTitle };
