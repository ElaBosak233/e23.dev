"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/storages/theme";

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
