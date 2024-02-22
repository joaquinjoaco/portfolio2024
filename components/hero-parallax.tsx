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
                        <ProductCard
                            project={project}
                            translate={translateX}
                            key={project.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            project={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
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

export const ProductCard = ({
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
            className="group/product h-[24rem] w-[24rem] relative flex-shrink-0"
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
                    className="object-cover object-top absolute h-full w-full inset-0 rounded-2xl shadow-2xl dark:shadow-none dark:opacity-80 dark:hover:opacity-100 transition-opacity"
                    alt={project.title}
                />
                <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 pointer-events-none"></div>
                <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold bg-gradient-to-r from-orange-600 to-fuchsia-800 rounded-2xl py-2 px-4">
                    {project.title}
                </h2>
            </Link>
        </motion.div>
    );
};
