import { ThemeToggle } from "./theme-toggle";

import { MainNav } from "@/components/main-nav";
import NameLink from "@/components/ui/name-link";

const Navbar = async () => {
    return (
        <>
            <div className="fixed z-10 mb-10 my-4 left-1/2 transform -translate-x-1/2 top-0 max-w-7xl flex h-16 items-center justify-center gap-x-4 text-nowrap pointer-events-auto rounded-2xl bg-gray-800/95 px-4 py-2.5 shadow-surface-glass backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]" >
                <NameLink
                    name="Joaquín Gómez"
                    href="/"
                />
                <MainNav className="mx-6" />
                <ThemeToggle />
            </div>
        </>
    );
}

export default Navbar;