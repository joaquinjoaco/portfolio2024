import { cn } from "@/lib/utils";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const About = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div
            id="about"
            className={cn("flex flex-col space-y-4 max-w-5xl mx-auto px-2 lg:px-16 w-full mb-32", className)}
        >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
                About me
            </h1>
            <div className="font-sans text-base md:text-xl tracking-tight text-pretty">
                I am currently pursuing a technical degree in Computer Science. I specialize in Front-end development, but I am also venturing into back-end development to have more complete skillset.
                <br />
                <br />
                One of the things I love about this industry is the opportunity to be creative and come up with new, great ideas, opening the door to explore new solutions that can positively impact both the customer and the team.
                <br />
                I consistently adopt the mindset of going a step beyond in each project by continuously learning. I am always willing and excited to learn new technologies and languages.
                <br />
                <br />
                <p className="font-semibold">These are the tools, technologies and languages that I currently work with:</p>
                NextJS, React / React Native, Javascript, Typescript, HTML, CSS, Tailwind CSS, MySQL, PostgreSQL, Prisma, TablePlus, Github, Docker, Figma.
                <br />
                In the past I have also used VueJS, Angular, Firebase, VB .NET, Java, C/C++ (classes, data structures, algorithms and pointers).
            </div>
            <div className="flex flex-col py-8">
                <div>
                    Check out my Linkedin & GitHub!
                    <Link
                        href={"https://drive.google.com/file/d/1z3wG_oBuzhRWHJNweGId3dgk9AtOx8xK/view"}
                        target="_blank"
                        className="flex items-center text-sky-600 dark:text-sky-300"
                        title="Google Drive"
                    ><ExternalLink className="h-4 w-4 mr-2" />You can also download/view my resume
                    </Link>
                </div>
                <div className="flex gap-x-4 pt-4">
                    <Link
                        href={"https://www.linkedin.com/in/joaquingomezleites/"}
                        target="_blank"
                        title="My LinkedIn"
                        className="p-4 rounded-2xl border hover:bg-foreground hover:text-background transition-colors"
                    >
                        <div>
                            <Linkedin className="h-8 w-8" />
                            <p className="text-muted-foreground text-sm">
                                joaquingomezleites
                            </p>
                        </div>
                    </Link>
                    <Link
                        href={"https://github.com/joaquinjoaco"}
                        target="_blank"
                        title="My GitHub"
                        className="p-4 rounded-2xl border hover:bg-foreground hover:text-background transition-colors"
                    >
                        <div>
                            <Github className="h-8 w-8" />
                            <p className="text-muted-foreground text-sm">
                                joaquinjoaco
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;