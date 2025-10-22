"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: "work" | "education";
}

const roadmapData: TimelineItem[] = [
  {
    date: "2016 - 2022",
    title: "My beginnings with programming",
    subtitle: "Giganci Programowania",
    description:
      "The beginning of my adventure in which I learned to code in Python, create games and websites.",
    type: "education",
  },

  {
    date: "2022 - Present",
    title: "High School",
    subtitle: "Niepubliczne Technikum Programistyczne Techni Schools",
    description:
      "Place where I spread my wings and absorbed a lot of knowledge and practice.",
    type: "education",
  },
  {
    date: "2025 March - Present",
    title: "Full Stack Developer",
    subtitle: "RedSteel Company",
    description:
      "Working on exciting projects using Payload CMS, Next.js, and Node.js.",
    type: "work",
  },
];

const Roadmap: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="roadmap" className="py-16 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Journey
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative wrap overflow-hidden p-10 h-full"
        >
          <div className="border-2-2 absolute left-1/2 border-opacity-20 border-primary h-full border"></div>

          {[...roadmapData].reverse().map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0
                  ? "flex-row-reverse left-timeline"
                  : "right-timeline"
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-primary-foreground">
                  {index + 1}
                </h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-4 bg-background rounded-lg shadow-xl text-card-foreground">
                <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                  {item.date}
                </time>
                <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                <h4 className="mb-1 text-md font-medium">{item.subtitle}</h4>
                <p className="text-base font-normal text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
