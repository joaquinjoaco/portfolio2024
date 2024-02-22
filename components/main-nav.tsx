"use client"

import Link from "next/link";

// local imports.
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { mobileProjects } from "@/lib/projectRoutes";
import { ExternalLink } from "lucide-react";
import { ListItem } from "./ui/list-item";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    return (
        <nav className={cn("flex items-center space-x-2 sm:space-x-4 lg:space-x-6", className)}>
            <Link
                href={"#about"}
                title={"About me!"}
                className={cn(
                    "text-xs sm:text-sm font-medium transition-colors text-muted-foreground hover:text-primary",
                )}
            >
                About me
            </Link>
            <Link
                href={"https://github.com/joaquinjoaco"}
                title={"My GitHub"}
                target="_blank"
                className={cn(
                    "xl:hidden text-xs sm:text-sm font-medium transition-colors text-muted-foreground hover:text-primary",
                )}
            >
                GitHub
            </Link>
            <NavigationMenu className="hidden xl:block">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-muted-foreground">Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                                {mobileProjects.map((project) => (
                                    <ListItem
                                        key={project.href}
                                        title={project.title}
                                        href={project.href}
                                        icon={<ExternalLink className="h-4 w-4" />}
                                    />
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </nav>
    );
};