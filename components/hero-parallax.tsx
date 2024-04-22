"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Header } from "./header";
import { ExternalLink } from "lucide-react";

export const HeroParallax = ({
    projects,
    className,
}: {
    projects: {
        title: string;
        href: string;
        thumbnail: string;
    }[];
    className?: string;
}) => {
    const firstRow = projects.slice(0, 5);
    const secondRow = projects.slice(5, 10);
    const thirdRow = projects.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    // Side to side
    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 200]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -200]),
        springConfig
    );

    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.1], [0.1, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 300]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className={cn("h-[300vh] py-24 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]", className)}
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((project) => (
                        <ProjectCard
                            project={project}
                            translate={translateX}
                            key={project.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProjectCard
                            project={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProjectCard
                            project={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const ProjectCard = ({
    project,
    translate,
}: {
    project: {
        title: string;
        href: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={project.title}
            className="group/project h-[24rem] w-[24rem] relative flex-shrink-0"
        >
            <Link
                href={project.href}
                className="block rounded-2xl"
                target="_blank"
            >
                <Image
                    src={project.thumbnail}
                    height="400"
                    width="400"
                    className="object-cover object-top absolute h-full w-full inset-0 rounded-2xl shadow-2xl dark:shadow-none"
                    alt={project.title}
                />

                <div className="absolute lg:group-hover/project:backdrop-blur-sm rounded-2xl w-full h-full">
                    <div className="absolute flex items-center justify-center w-full h-full bg-black/50 opacity-0 rounded-2xl lg:group-hover/project:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity">
                        <ExternalLink className="text-white h-16 w-16" />
                    </div>
                </div>
                <h2 className="absolute -top-12  opacity-0 text-white font-semibold translate-y-12 lg:group-hover/project:translate-y-0 lg:group-hover/project:opacity-100 bg-gradient-to-r from-orange-600 to-fuchsia-800 rounded-2xl py-2 px-4 transition-all">
                    {project.title}
                </h2>
            </Link>
        </motion.div>
    );
};
