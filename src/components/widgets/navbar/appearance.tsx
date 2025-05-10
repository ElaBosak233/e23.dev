"use client";

import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/storages/theme";
import { MoonIcon, SunIcon } from "lucide-react";

function Appearance() {
    const { theme, setTheme } = useThemeStore();

    return (
        <Button
            square
            size={"sm"}
            icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
    );
}

export { Appearance };
