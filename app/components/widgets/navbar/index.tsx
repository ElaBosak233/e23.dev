import { HeartIcon, HomeIcon, LibraryIcon, Menu, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/utils";
import { AnimatedTitle } from "./animated-title";
import { Appearance } from "./appearance";

function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollTopRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(max-width: 1023px)");
    const viewport = document.querySelector<HTMLElement>(
      "[data-slot='scroll-area-viewport']"
    );

    if (!viewport) return;

    const updateVisibility = () => {
      if (!media.matches) {
        setIsHidden(false);
        lastScrollTopRef.current = viewport.scrollTop;
        return;
      }

      const current = viewport.scrollTop;
      const delta = current - lastScrollTopRef.current;

      if (Math.abs(delta) < 6) return;

      if (current <= 0) {
        setIsHidden(false);
      } else if (delta > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollTopRef.current = current;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        updateVisibility();
        tickingRef.current = false;
      });
    };

    const onMediaChange = () => {
      if (!media.matches) setIsHidden(false);
    };

    lastScrollTopRef.current = viewport.scrollTop;
    viewport.addEventListener("scroll", onScroll, { passive: true });
    media.addEventListener("change", onMediaChange);

    return () => {
      viewport.removeEventListener("scroll", onScroll);
      media.removeEventListener("change", onMediaChange);
    };
  }, []);

  const links = [
    { href: "/", label: "Home", icon: <HomeIcon /> },
    { href: "/articles", label: "Articles", icon: <LibraryIcon /> },
    {
      href: "/friends",
      label: "Friends",
      icon: <HeartIcon fill={"red"} color={"red"} />,
    },
    { href: "/about", label: "About", icon: <Star /> },
  ];

  return (
    <header
      className={cn([
        "sticky",
        "top-0",
        "p-4",
        "select-none",
        "flex",
        "items-center",
        "z-10",
        "transition-transform",
        "duration-200",
        "ease-out",
        isHidden && "-translate-y-24",
      ])}
    >
      <div
        className={cn([
          "container",
          "bg-card/80",
          "ml-auto",
          "mr-auto",
          "px-5",
          "py-2",
          "max-w-325",
          "flex",
          "items-center",
          "justify-between",
          "rounded-full",
          "border",
          "backdrop-blur-md",
        ])}
      >
        <div
          className={cn([
            "flex",
            "gap-3",
            "lg:px-5",
            "items-center",
            "animate-slide-from-center-left",
          ])}
        >
          <div className={cn(["lg:hidden"])}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="Open navigation menu"
                  size={"sm"}
                  icon={<Menu />}
                  square
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={"start"}
                sideOffset={16}
                alignOffset={-24}
              >
                {links.map(({ href, icon, label }) => (
                  <DropdownMenuItem asChild key={href}>
                    <Link
                      to={href}
                      className={cn([
                        "w-full",
                        "flex",
                        "items-center",
                        "gap-2",
                      ])}
                    >
                      {icon}
                      {label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <img
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
            "flex",
            "gap-2",
            "items-center",
            "animate-slide-from-center-right",
          ])}
        >
          <div className={cn(["hidden", "lg:flex", "gap-3", "items-center"])}>
            {links.map(({ href, icon, label }) => (
              <Button asChild key={href} icon={icon}>
                <Link to={href}>{label}</Link>
              </Button>
            ))}
            <span>|</span>
          </div>
          <Appearance />
        </div>
      </div>
    </header>
  );
}

export { Navbar };
