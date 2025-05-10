import { cn } from "@/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeartIcon, HomeIcon, LibraryIcon, Star } from "lucide-react";
import { AnimatedTitle } from "./animated-title";
import { Appearance } from "./appearance";

function Navbar() {
    return (
        <header
            className={cn([
                "sticky",
                "top-0",
                "h-16",
                "bg-card/80",
                "backdrop-blur-xs",
                "select-none",
                "border-b-[1px]",
                "flex",
                "items-center",
                "z-10",
            ])}
        >
            <div
                className={cn([
                    "container",
                    "ml-auto",
                    "mr-auto",
                    "px-5",
                    "max-w-[1300px]",
                    "flex",
                    "items-center",
                    "justify-between",
                ])}
            >
                <div className={cn(["flex", "gap-3", "px-5", "items-center"])}>
                    <Image
                        src={"/favicon.svg"}
                        alt="Ela's cutie mark"
                        width={32}
                        height={32}
                        draggable={false}
                    />
                    <AnimatedTitle />
                </div>
                <div
                    className={cn([
                        "hidden",
                        "lg:flex",
                        "gap-3",
                        "items-center",
                    ])}
                >
                    <Button asChild icon={<HomeIcon />}>
                        <Link href={"/"}>Home</Link>
                    </Button>
                    <Button asChild icon={<LibraryIcon />}>
                        <Link href={"/articles"}>Articles</Link>
                    </Button>
                    <Button
                        asChild
                        icon={<HeartIcon fill={"red"} color={"red"} />}
                    >
                        <Link href={"/friends"}>Friends</Link>
                    </Button>
                    <Button asChild icon={<Star />}>
                        <Link href={"/about"}>About</Link>
                    </Button>
                    <span>|</span>
                    <Appearance />
                </div>
            </div>
        </header>
    );
}

export { Navbar };
