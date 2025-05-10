"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import nprogress from "nprogress";

export default function Motion({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const searchparams = useSearchParams();

    useEffect(() => {
        nprogress.start();
    }, [pathname]);

    useEffect(() => {
        nprogress.done();
    }, [searchparams]);

    return (
        <motion.main
            key={pathname}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
                pageInitial: { opacity: 0 },
                pageAnimate: { opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(["flex", "flex-col", "min-h-[calc(100vh-64px)]"])}
        >
            {children}
        </motion.main>
    );
}
