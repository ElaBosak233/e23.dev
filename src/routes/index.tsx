import { createFileRoute } from "@tanstack/react-router";
import { easeInOut, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "E23.DEV",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const shouldReduceMotion = useReducedMotion();
  const floatAnimate = shouldReduceMotion ? { y: 0 } : { y: [0, -12, 0] };
  const floatTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: easeInOut };
  const containerVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={cn([
        "mx-10",
        "flex-1",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "select-none",
      ])}
      animate={floatAnimate}
      transition={floatTransition}
    >
      <motion.div
        className={cn(["flex", "flex-col"])}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.span
          className={cn([
            "text-green-600",
            "dark:text-green-400",
            "my-2",
            "font-semibold",
            "font-mono",
          ])}
          variants={itemVariants}
        >
          Hi, this is
        </motion.span>
        <motion.span
          className={cn([
            "text-sky-600",
            "dark:text-sky-400",
            "mb-2",
            "text-3xl",
            "md:text-8xl",
            "font-bold",
            "font-serif",
          ])}
          variants={itemVariants}
        >
          @ElaBosak233
        </motion.span>
        <motion.span
          className={cn([
            "text-red-400",
            "dark:text-red-300",
            "mb-4",
            "text-6xl",
            "font-bold",
            "font-serif",
          ])}
          variants={itemVariants}
        >
          <span>A </span>
          <span className={cn("text-pink-400", "dark:text-pink-200")}>
            Pegasus
          </span>
          <span> & </span>
          <span className={cn("text-sky-400", "dark:text-sky-200")}>
            Developer
          </span>
        </motion.span>
        <motion.div className={cn(["mb-4"])} variants={itemVariants}>
          Hoof to heart!
          <motion.span
            className={cn(["ml-2", "inline-block"])}
            animate={
              shouldReduceMotion
                ? { y: 0 }
                : { y: [0, -3, 0], rotate: [0, -4, 0] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }
            }
          >
            ✨
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
