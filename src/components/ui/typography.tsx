import { useEffect } from "react";
import { cn } from "@/utils";

type TypographyProps = React.ComponentProps<"article">;

function Typography(props: TypographyProps) {
  const { children, className, ...rest } = props;

  useEffect(() => {
    setTimeout(() => {
      if (location.hash.replace("#", "").length > 0) {
        document
          .getElementById(decodeURIComponent(location.hash.replace("#", "")))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }, []);

  return (
    <article
      className={cn([
        "prose",
        "dark:prose-invert",
        "prose-pre:p-0",
        "max-w-none",
        className,
      ])}
      {...rest}
    >
      {children}
    </article>
  );
}

export { Typography };
