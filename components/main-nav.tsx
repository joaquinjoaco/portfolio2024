"use client"

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

// local imports.
import { cn } from "@/lib/utils";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/aboutme`,
            label: 'About me',
            active: pathname === `/aboutme`,
            title: "About me!"
        },
        {
            href: `https://github.com/joaquinjoaco`,
            label: 'GitHub',
            target: "_blank",
            title: "My GitHub!"
            // active: pathname === `/aboutme`,
        }
    ];

    return (
        <nav
            className={cn("flex items-center space-x-2 sm:space-x-4 lg:space-x-6", className)}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    target={route.target}
                    title={route.title}
                    className={cn(
                        "text-xs sm:text-sm font-medium transition-colors hover:text-primary",
                        route.active ? "text-black dark:text-white" : "text-muted-foreground"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    );
};