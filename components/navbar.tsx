import { ThemeToggle } from "./ui/theme-toggle";

import { MainNav } from "@/components/main-nav";
import NameLink from "@/components/ui/name-link";

const Navbar = async () => {
    return (
        <>
            <div className="fixed px-4 z-30 flex h-16 items-center justify-center sm:gap-x-4 text-nowrap my-4 left-1/2 transform -translate-x-1/2 top-0 pointer-events-auto rounded-2xl bg-gray-800/95 py-2.5 shadow-surface-glass backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]" >
                <NameLink
                    name="Joaquín Gómez"
                    href="/"
                    className="pl-4 pr-2 sm:pr-0"
                />
                <MainNav className="mx-6" />
                <ThemeToggle />
            </div>
        </>
    );
}

export default Navbar;