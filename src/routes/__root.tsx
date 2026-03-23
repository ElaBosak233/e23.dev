import { TanStackDevtools } from "@tanstack/react-devtools";
import {
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { motion } from "framer-motion";
import nprogress from "nprogress";
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeWatcher } from "@/components/utils/theme-watcher";
import { Navbar } from "@/components/widgets/navbar";
import "@/styles/main.css";
import { cn } from "@/utils";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "E23.DEV",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  }),
  notFoundComponent: () => null,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isLoading = useRouterState({
    select: (state) => state.status === "pending",
  });

  useEffect(() => {
    if (isLoading) {
      nprogress.start();
    } else {
      nprogress.done();
    }
  }, [isLoading]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeWatcher />
        <ScrollArea
          className={cn([
            "relative",
            "w-screen",
            "h-screen",
            "m-0",
            "overflow-auto",
          ])}
        >
          <Navbar />
          <motion.main
            key={pathname}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: { opacity: 0 },
              pageAnimate: { opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(["flex", "flex-col", "min-h-[calc(100vh-90px)]"])}
          >
            {children}
          </motion.main>
          <img
            src="/background.jpg"
            alt="Background"
            width={128}
            draggable={false}
            className={cn([
              "left-0 print:hidden top-0 w-screen fixed h-screen pointer-events-none -z-10 object-cover opacity-10 blur-3xl",
            ])}
          />
        </ScrollArea>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
