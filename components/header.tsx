import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

export const Header = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div className={cn("max-w-7xl relative mx-auto px-2 py-44 sm:py-21 md:py-30 lg:py-40  w-full left-0 top-0", className)}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
                Hello there! I&apos;m Joaquín, and I specialize in <span className="text-yellow-400 dark:text-yellow-100">Full stack</span> web development.
                With a keen eye for design, I craft engaging, functional and visually
                appealing user experiences.
            </h1>
            <p className="flex gap-x-2 items-center max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                <MapPin className="h-5 w-5" />Montevideo, Uruguay
            </p>
        </div>
    );
};
