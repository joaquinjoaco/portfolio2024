import { cn } from "@/lib/utils";
import { Download, ExternalLink, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const About = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div
            id="about"
            className={cn("flex flex-col space-y-4 max-w-5xl mx-auto px-2 lg:px-16 w-full", className)}>
            <h1
                className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
                About me
            </h1>
            <p
                className="font-sans text-base md:text-xl tracking-tight text-pretty">
                I graduated from Technological Secondary Education in Computer Science. I am currently pursuing a technical degree in such field.

                One of the things I love about this industry is the opportunity to be creative and come up with new, great ideas, opening the door to explore new solutions that can positively impact both the customer and the team.
                <br />
                <br />
                I am constantly evolving in the fields of web development and both User Experience and User Interface design.

                I am currently working with a range of tools and technologies such as NextJS,
                React / React Native, Javascript, Typescript, HTML, CSS, MySQL, PostgreSQL, Prisma, TablePlus,
                Firebase, Github, Figma.
                <br />
                I have also used VueJS, Angular, VB .NET, C/C++ and Java.
                <br />
                <br />
                {/* Check out my Linkedin & GitHub!
                <Link
                    href={"https://drive.google.com/file/d/1z3wG_oBuzhRWHJNweGId3dgk9AtOx8xK/view"}
                    target="_blank"
                    className="text-sky-600 dark:text-sky-300 "
                > (You can also download my resume)
                </Link> */}
            </p>
            <div className="flex flex-col">
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