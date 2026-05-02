import { easeInOut, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/utils";

export function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "404 Not Found - E23.DEV";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={cn([
        "flex-1",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "select-none",
        "px-6",
      ])}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: easeInOut,
                }
          }
        >
          <h1
            className={cn([
              "text-[8rem]",
              "sm:text-[10rem]",
              "md:text-[12rem]",
              "font-bold",
              "font-serif",
              "leading-none",
              "tracking-tight",
            ])}
          >
            <span className={cn(["text-sky-500", "dark:text-sky-400"])}>4</span>
            <span className={cn(["text-pink-500", "dark:text-pink-300"])}>
              0
            </span>
            <span className={cn(["text-sky-500", "dark:text-sky-400"])}>4</span>
          </h1>
        </motion.div>
      </motion.div>

      <motion.p
        className={cn([
          "text-lg",
          "sm:text-xl",
          "md:text-2xl",
          "text-muted-foreground",
          "font-serif",
          "mb-1",
        ])}
        variants={itemVariants}
      >
        Not Found
      </motion.p>

      <motion.p
        className={cn([
          "text-sm",
          "sm:text-base",
          "text-muted-foreground/60",
          "mb-10",
          "text-center",
          "max-w-xs",
          "sm:max-w-sm",
        ])}
        variants={itemVariants}
      >
        Maybe it's soaring through the clouds somewhere.
      </motion.p>
    </motion.div>
  );
}
