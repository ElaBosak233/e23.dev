import type { Metadata } from "next";
import { Ubuntu_Sans, Ubuntu_Sans_Mono } from "next/font/google";
import { cn } from "@/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeWatcher } from "@/components/utils/theme-watcher";
import { Navbar } from "@/components/widgets/navbar";
import Motion from "./motion";
import "@/styles/main.css";
import { Suspense } from "react";

const ubuntuSans = Ubuntu_Sans({
    variable: "--font-ubuntu",
    subsets: ["latin"],
});

const ubuntuSansMono = Ubuntu_Sans_Mono({
    variable: "--font-ubuntu-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "E23.DEV",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </head>
            <body
                className={cn([
                    ubuntuSans.variable,
                    ubuntuSansMono.variable,
                    "antialiased",
                ])}
            >
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
                    <Suspense>
                        <Navbar />
                        <Motion>{children}</Motion>
                    </Suspense>
                </ScrollArea>
            </body>
        </html>
    );
}
