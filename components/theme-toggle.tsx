"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="pr-4">
            <Button
                variant="outline"
                size="icon"
                // className="h-10 px-4 py-2"
                onClick={() => {
                    theme === "dark" ? setTheme("light") : setTheme("dark");
                }}
            >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Change theme</span>
            </Button>

        </div >
    );
};