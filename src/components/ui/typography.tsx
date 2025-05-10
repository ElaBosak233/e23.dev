"use client";

import { cn } from "@/utils";
import { useEffect } from "react";

type TypographyProps = React.ComponentProps<"article">;

function Typography(props: TypographyProps) {
    const { children, className, ...rest } = props;

    function scrollToView() {
        setTimeout(() => {
            if (location.hash.replace("#", "").length > 0)
                document
                    .getElementById(decodeURI(location.hash.replace("#", "")))
                    ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }

    useEffect(() => {
        scrollToView();
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
