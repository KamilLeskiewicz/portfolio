"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "cyk.pl - AI Mental Support",
      description: "🏆 2nd Place at Techni Schools Code Camp Warsaw 2024! An AI-powered virtual psychologist built on the Bielik model, combining smart initial diagnosis, empathetic AI conversations, and real-time human supervision to provide immediate and professional-quality mental support.",
      image: "/#",
      altText: "cyk.pl - AI Mental Support - 2nd place hackathon project",
      tags: ["TypeScript", "Node.js", "Express", "MongoDB", "Bielik AI", "HTML", "CSS"],
      githubUrl: "https://github.com/AzpektDev/cyk.pl",
    },
        {
      title: "JSON reader",
      description: "An application that allows easy viewing of data in JSON format, sent from the backend. The tool effectively presents content in the form of lesson notes on the page, making them easier to read and organize.",
      image: "/json.webp",
      altText: "JSON Reader - projekt Kamila Leśkiewicza",
      tags: ["React", "JavaScript", "CSS", "MongoDB"],
      githubUrl: "https://github.com/SmoczaSkala/schoolNotes",
    },
    {
      title: "CardParty",
      description:
        "An interactive platform created for integration and spending time together playing card games. It has a card editor that allows you to create your own decks and define the rules of the game. The project is in the early stages of development, but has great potential for the future. It was a project for the Jumpstart EIT competition.",
      image: "/cardparty.png",
      altText: "CardParty - aplikacja z udziałem Kamila Leśkiewicza",
      tags: ["React", "CSS", "JavaScript", "Rust"],
      githubUrl: "https://github.com/orgs/CardParty/repositories",
    },
    {
      title: "Weather App",
      description:
        "A simple mobile weather app that shows detailed information about the location entered by the user.",
      image: "/weather.jpg",
      altText: "Weather App - aplikacja pogodowa Kamil Leśkiewicz",
      tags: [
        "ReactNative",
        "TypeScript",
        "JavaScript",
        "swift",
        "xCode",
        "expo",
      ],
      githubUrl: "https://github.com/KamilLeskiewicz/Pogodynka",
    },
    {
      title: "Currently working!",
      description: "Something big is coming",
      image: "/white.png",
      altText: "Nadchodzący projekt - Kamil Leśkiewicz programista",
      tags: ["Next.js", "Payload", "Shardcn", "Tailwind CSS", "TypeScript"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          My Projects
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.altText || project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          title={project.title}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <Link
                href={project.githubUrl}
                target="_blank"
                className="flex items-center gap-1"
              >
                <Github className="h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" asChild>
              <Link
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
