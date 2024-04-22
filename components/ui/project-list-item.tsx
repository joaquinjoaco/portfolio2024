import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectListItemProps {
    href: string,
    title: string,
    description: string,
    thumbnail: string,
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
    href,
    title,
    description,
    thumbnail,
}) => {
    return (
        <Link
            href={href}
            target="_blank"
            className="group relative flex justify-between border-b pb-8 lg:justify-between lg:gap-x-8"
        >
            <ExternalLink className="absolute opacity-0 lg:group-hover:opacity-100 h-16 w-16 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all" />
            <div className="lg:group-hover:brightness-50 transition-all">
                <div className="text-lg font-semibold">
                    {title}
                </div>
                <div className="text-sm text-muted-foreground font-normal max-w-[60%]">
                    {description}
                </div>
            </div>
            <Image
                src={thumbnail}
                alt={title}
                width={200}
                height={100}
                quality={100}
                className="max-w-[20%] h-40 object-cover object-top rounded-2xl shadow-2xl dark:shadow-none lg:group-hover:brightness-50 transition-all"
            />
        </Link>
    );
}

export default ProjectListItem;