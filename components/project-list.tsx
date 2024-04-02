import Image from "next/image";

import { mobileProjects } from "@/lib/projectRoutes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const ProjectList = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div>
            <div
                id="projects"
                className={cn("flex flex-col space-y-4 max-w-5xl mx-auto px-2 lg:px-16 w-full mb-44", className)}>
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
                    Projects
                </h1>

                <div className="flex flex-col gap-y-16 py-8">
                    {/* Projects */}
                    {mobileProjects.map((project, idx) => (
                        <Link
                            href={project.href}
                            target="_blank"
                            className="group relative flex justify-between border-b pb-8  lg:justify-between lg:gap-x-8"
                            key={idx}
                        >
                            <ExternalLink className="absolute opacity-0 lg:group-hover:opacity-100 h-16 w-16 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all" />
                            <div className="lg:group-hover:brightness-50 transition-all">
                                <div className="text-lg font-semibold">
                                    {project.title}
                                </div>
                                <div className="text-sm text-muted-foreground font-normal max-w-[60%]">
                                    {project.description}
                                </div>
                            </div>
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                width={200}
                                height={100}
                                quality={100}
                                className="max-w-[20%] h-40 object-cover object-top rounded-2xl lg:group-hover:brightness-50 transition-all"
                            />
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default ProjectList;