"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const ParallaxScroll = ({
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
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(projects.length / 3);

    const firstPart = projects.slice(0, third);
    const secondPart = projects.slice(third, 2 * third);
    const thirdPart = projects.slice(2 * third);

    return (
        <div
            className={cn("items-start w-full", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-3 items-start max-w-5xl mx-auto gap-4 md:gap-10 px-2 pb-[50vh]"
                ref={gridRef}
            >
                <div className="grid gap-10">
                    {firstPart.map((project, idx) => (
                        <motion.div
                            style={{ y: translateFirst }} // Applies the translateY motion value here
                            key={"grid-1" + idx}
                        >
                            <Link
                                href={project.href}
                                target="_blank"
                            >
                                <Image
                                    src={project.thumbnail}
                                    className="h-40 w-full object-cover object-top shadow-lg rounded-2xl gap-10 !m-0 !p-0"
                                    height="400"
                                    width="400"
                                    alt="thumbnail"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((project, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <Link
                                href={project.href}
                                target="_blank"
                            >
                                <Image
                                    src={project.thumbnail}
                                    className="h-40 w-full object-cover object-top shadow-lg rounded-2xl gap-10 !m-0 !p-0"
                                    height="400"
                                    width="400"
                                    alt="thumbnail"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((project, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <Link
                                href={project.href}
                                target="_blank"
                            >
                                <Image
                                    src={project.thumbnail}
                                    className="h-40 w-full object-cover object-top shadow-lg rounded-2xl gap-10 !m-0 !p-0"
                                    height="400"
                                    width="400"
                                    alt="thumbnail"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
