"use client";

import { motion } from "framer-motion";
import nprogress from "nprogress";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router";
import { cn } from "@/utils";

export default function Layout() {
  const location = useLocation();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") {
      nprogress.start();
    } else {
      nprogress.done();
    }
  }, [navigation.state]);

  return (
    <motion.main
      key={location.pathname}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: { opacity: 0 },
        pageAnimate: { opacity: 1 },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(["flex", "flex-col", "min-h-[calc(100vh-90px)]"])}
    >
      <Outlet />
    </motion.main>
  );
}
