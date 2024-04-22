import { mobileProjects } from "@/lib/projectRoutes";
import { cn } from "@/lib/utils";
import ProjectListItem from "./ui/project-list-item";

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
                        <ProjectListItem
                            key={idx}
                            title={project.title}
                            description={project.description}
                            thumbnail={project.thumbnail}
                            href={project.href}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default ProjectList;