
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface NameLinkProps {
    name: string;
    href: string;
    className?: string;
}

const NameLink: React.FC<NameLinkProps> = ({
    name,
    href,
    className
}) => {
    return (
        <>
            <Link
                href={href}
                className={cn("text-xs sm:text-sm font-medium transition-colors hover:text-primary", className)}
            >
                {name}
            </Link>
            <Image
                src={"/favicon.ico"}
                width={30}
                height={30}
                alt="ficus" />
        </>
    );
}

export default NameLink;