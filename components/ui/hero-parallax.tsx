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
import { MapPin } from "lucide-react";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
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
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
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
            className="h-[300vh] py-24 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-21  md:py-20 lg:py-40 px-16 w-full  left-0 top-0">
            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold dark:text-white tracking-tighter">
                Hello there! I&apos;m Joaquín, and I specialize in front-end web development.
                With a keen eye for design, I craft engaging, functional and visually
                appealing user experiences.
            </h1>
            <p className="flex gap-x-2 items-center max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                <MapPin className="h-5 w-5" />Montevideo, Uruguay
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
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
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0 rounded-2xl"
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl rounded-2xl"
                target="_blank"
            >
                <Image
                    src={product.thumbnail}
                    height="400"
                    width="400"
                    className="object-cover object-top absolute h-full w-full inset-0 rounded-2xl opacity-80 hover:opacity-100 transition-opacity"
                    alt={product.title}
                />
                <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 pointer-events-none"></div>
                <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold bg-gradient-to-r from-orange-600 to-fuchsia-800 rounded-2xl py-2 px-4">
                    {product.title}
                </h2>
            </Link>

        </motion.div>
    );
};
