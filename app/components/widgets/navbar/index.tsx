import { HeartIcon, HomeIcon, LibraryIcon, Star } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
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
          <img
            src={"/favicon.svg"}
            alt="Ela's cutie mark"
            width={32}
            height={32}
            draggable={false}
          />
          <AnimatedTitle />
        </div>
        <div className={cn(["hidden", "lg:flex", "gap-3", "items-center"])}>
          <Button asChild icon={<HomeIcon />}>
            <Link to={"/"}>Home</Link>
          </Button>
          <Button asChild icon={<LibraryIcon />}>
            <Link to={"/articles"}>Articles</Link>
          </Button>
          <Button asChild icon={<HeartIcon fill={"red"} color={"red"} />}>
            <Link to={"/friends"}>Friends</Link>
          </Button>
          <Button asChild icon={<Star />}>
            <Link to={"/about"}>About</Link>
          </Button>
          <span>|</span>
          <Appearance />
        </div>
      </div>
    </header>
  );
}

export { Navbar };
