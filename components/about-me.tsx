import { cn } from "@/lib/utils";

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
                I graduated from Technological Secondary Education in Computer Science. I'm currently pursuing a technical degree in such field.

                One of the things I love about this industry is the opportunity to be creative and come up with new ideas, that can positively impact both the customer and the team.
                <br />
                <br />
                Over the past three years, I've been self-educating myself in the fields of front-end development and both User Experience and User Interface design.

                I'm currently stepping into Full Stack development working with a range of technologies such as NextJS,
                React / React Native, Javascript, Typescript, HTML, CSS, MySQL, PostgreSQL, Prisma,
                Firebase, Github, Figma.
                <br />
                I've also used VueJS, Angular, VB .NET, C/C++ and Java.
            </p>
        </div>
    );
}

export default About;