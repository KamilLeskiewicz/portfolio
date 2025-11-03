"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
interface PhotoSEO {
  title?: string;
  description?: string;
  keywords?: string[];
}

interface Photo {
  src: string;
  alt: string;
  caption?: string;
  seo?: PhotoSEO;
}

interface Event {
  name: string;
  date: string;
  description: string;
  photos: Photo[];
}

export default function PhotoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<{
    photo: Photo;
    index: number;
    eventPhotos: Photo[];
  } | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const events: Event[] = [
    {
      name: "Hackathon Technischools 2025",
      date: "October 2025",
      description: "Hackathon at Techni Schools Code Camp in Warsaw",
      photos: [
        {
          src: "/gallery/hackathon2025.jpg",
          alt: "Kamil Leśkiewicz receiving award at Techni Schools Code Camp hackathon 2025 in Warsaw - Fullstack Developer portfolio",
          caption: "Receiving award",
          seo: {
            title: "Kamil Leśkiewicz - Hackathon Award Ceremony Techni Schools Code Camp 2025",
            description: "Kamil Leśkiewicz, fullstack developer, receiving award at Techni Schools Code Camp hackathon 2025 in Warsaw. Portfolio photo gallery.",
            keywords: ["Kamil Leśkiewicz", "hackathon", "award", "techni schools", "warsaw", "coding competition", "programming", "fullstack developer"],
          },
        },
                {
          src: "/gallery/hackathon2025(6).jpg",
          alt: "Kamil Leśkiewicz receiving award at Techni Schools Code Camp hackathon 2025 in Warsaw - Fullstack Developer portfolio",
          caption: "Receiving award",
          seo: {
            title: "Kamil Leśkiewicz - Hackathon Award Ceremony Techni Schools Code Camp 2025",
            description: "Kamil Leśkiewicz, fullstack developer, receiving award at Techni Schools Code Camp hackathon 2025 in Warsaw. Portfolio photo gallery.",
            keywords: ["Kamil Leśkiewicz", "hackathon", "award", "techni schools", "warsaw", "coding competition", "programming", "fullstack developer"],
          },
        },
        {
          src: "/gallery/hackathon2025(1).jpg",
          alt: "Award ceremony at Techni Schools Code Camp hackathon 2025 - Kamil Leśkiewicz portfolio gallery",
          caption: "Receiving award",
          seo: {
            title: "Kamil Leśkiewicz - Hackathon Award Ceremony Techni Schools 2025",
            description: "Award ceremony moment from Techni Schools Code Camp hackathon 2025 featuring Kamil Leśkiewicz. Web developer portfolio photos.",
            keywords: ["Kamil Leśkiewicz", "hackathon", "award ceremony", "techni schools", "coding competition", "web developer"],
          },
        },
        {
          src: "/gallery/hackathon2025(2).jpg",
          alt: "Kamil Leśkiewicz presenting project at Techni Schools hackathon 2025 - Programista portfolio",
          caption: "Project presentation",
          seo: {
            title: "Kamil Leśkiewicz - Project Presentation at Hackathon Techni Schools 2025",
            description: "Kamil Leśkiewicz presenting project at Techni Schools Code Camp hackathon. Fullstack developer portfolio gallery.",
            keywords: ["Kamil Leśkiewicz", "project presentation", "hackathon", "techni schools", "programista", "fullstack developer"],
          },
        },
        {
          src: "/gallery/hackathon2025(3).jpg",
          alt: "Hackathon project presentation by Kamil Leśkiewicz - Portfolio gallery Techni Schools",
          caption: "Project presentation",
          seo: {
            title: "Kamil Leśkiewicz - Hackathon Project Presentation 2025",
            description: "Kamil Leśkiewicz during project presentation at Techni Schools Code Camp hackathon. Web developer portfolio.",
            keywords: ["Kamil Leśkiewicz", "project presentation", "hackathon", "coding", "programming", "web developer"],
          },
        },
        {
          src: "/gallery/hackathon2025(4).jpg",
          alt: "Team presenting project at Techni Schools hackathon 2025 with Kamil Leśkiewicz",
          caption: "Project presentation",
          seo: {
            title: "Kamil Leśkiewicz Team - Project Presentation Hackathon 2025",
            description: "Team including Kamil Leśkiewicz presenting project at Techni Schools Code Camp hackathon. Developer portfolio photos.",
            keywords: ["Kamil Leśkiewicz", "team presentation", "hackathon", "coding competition", "programista"],
          },
        },
        {
          src: "/gallery/hackathon2025(5).jpg",
          alt: "Kamil Leśkiewicz project demo at coding hackathon in Warsaw - Portfolio gallery",
          caption: "Project presentation",
          seo: {
            title: "Kamil Leśkiewicz - Project Demo Hackathon Techni Schools 2025",
            description: "Kamil Leśkiewicz demonstrating project during hackathon presentation in Warsaw. Fullstack developer portfolio.",
            keywords: ["Kamil Leśkiewicz", "project demo", "hackathon", "presentation", "warsaw", "programista"],
          },
        },
        {
          src: "/gallery/hackathon2025(work).jpg",
          alt: "Kamil Leśkiewicz working on hackathon project - coding and development during competition",
          caption: "Work on the project",
          seo: {
            title: "Kamil Leśkiewicz - Hackathon Coding Session Techni Schools 2025",
            description: "Kamil Leśkiewicz working on project during Techni Schools Code Camp hackathon. Web developer portfolio work photos.",
            keywords: ["Kamil Leśkiewicz", "hackathon work", "coding", "development", "programming competition", "programista"],
          },
        },
        {
          src: "/gallery/hackathon2025(work2).jpg",
          alt: "Kamil Leśkiewicz development process during hackathon - Portfolio coding session",
          caption: "Work on the project",
          seo: {
            title: "Kamil Leśkiewicz - Development Process Hackathon Work Session",
            description: "Kamil Leśkiewicz during development and coding session at hackathon competition. Fullstack developer portfolio gallery.",
            keywords: ["Kamil Leśkiewicz", "development", "coding", "hackathon", "programming", "fullstack developer"],
          },
        },
      ],
    },
    // {
    //   name: "School Events",
    //   date: "2022 - Present",
    //   description: "Moments from Techni Schools",
    //   photos: [
    //   ],
    // },
    // {
    //   name: "Conferences & Workshops",
    //   date: "Various",
    //   description: "Tech events and learning experiences",
    //   photos: [
    //   ],
    // },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const displayedEvents = selectedEvent
    ? events.filter((e) => e.name === selectedEvent)
    : events;

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  };

  const handlePhotoClick = (photo: Photo, index: number, eventPhotos: Photo[]) => {
    setSelectedPhoto({ photo, index, eventPhotos });
  };

  const handleNextPhoto = () => {
    if (selectedPhoto) {
      const nextIndex = (selectedPhoto.index + 1) % selectedPhoto.eventPhotos.length;
      setSelectedPhoto({
        photo: selectedPhoto.eventPhotos[nextIndex],
        index: nextIndex,
        eventPhotos: selectedPhoto.eventPhotos,
      });
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhoto) {
      const prevIndex =
        (selectedPhoto.index - 1 + selectedPhoto.eventPhotos.length) %
        selectedPhoto.eventPhotos.length;
      setSelectedPhoto({
        photo: selectedPhoto.eventPhotos[prevIndex],
        index: prevIndex,
        eventPhotos: selectedPhoto.eventPhotos,
      });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Kamil Leśkiewicz - Portfolio Photo Gallery",
    "description": "Photos from hackathons, conferences, and learning experiences featuring Kamil Leśkiewicz - Fullstack Developer portfolio",
    "author": {
      "@type": "Person",
      "name": "Kamil Leśkiewicz",
      "jobTitle": "Fullstack Developer",
    },
    "image": events.flatMap(event => event.photos.map(photo => ({
      "@type": "ImageObject",
      "url": photo.src,
      "name": photo.seo?.title || photo.alt,
      "description": photo.seo?.description || photo.caption || photo.alt,
      "keywords": photo.seo?.keywords?.join(", ") || "",
      "creator": {
        "@type": "Person",
        "name": "Kamil Leśkiewicz",
      },
    }))),
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Photo Gallery</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Moments captured from hackathons, conferences, and learning experiences - Kamil Leśkiewicz portfolio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          <Button
            variant={selectedEvent === null ? "default" : "outline"}
            onClick={() => setSelectedEvent(null)}
            className="transition-all"
          >
            All Events
          </Button>
          {events.map((event) => (
            <Button
              key={event.name}
              variant={selectedEvent === event.name ? "default" : "outline"}
              onClick={() => setSelectedEvent(event.name)}
              className="transition-all"
            >
              {event.name}
            </Button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {displayedEvents.map((event, eventIndex) => (
            <motion.div key={event.name} variants={itemVariants}>
              <Card className="overflow-hidden">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold">{event.name}</h3>
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">{event.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {event.photos.map((photo, photoIndex) => (
                      <motion.div
                        key={photoIndex}
                        variants={photoVariants}
                        className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                      >
                        {!loadedImages.has(photo.src) && (
                          <Skeleton className="absolute inset-0 z-10" />
                        )}
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          onLoad={() => handleImageLoad(photo.src)}
                          title={photo.seo?.title || photo.alt}
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div 
                          className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end z-20"
                          onClick={() => handlePhotoClick(photo, photoIndex, event.photos)}
                        >
                          <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                            {photo.caption && (
                              <p className="text-sm font-medium">{photo.caption}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
          
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white/20 z-10"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevPhoto();
                }}
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextPhoto();
                }}
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </Button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-6xl max-h-[95vh] sm:max-h-[90vh] w-full h-full flex flex-col items-center justify-center px-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={selectedPhoto.photo.src}
                    alt={selectedPhoto.photo.alt}
                    width={1920}
                    height={1080}
                    className="object-contain max-h-[75vh] sm:max-h-[80vh] w-auto h-auto"
                    title={selectedPhoto.photo.seo?.title || selectedPhoto.photo.alt}
                    loading="eager"
                    priority
                  />
                </div>
                {selectedPhoto.photo.caption && (
                  <p className="text-white text-center mt-3 sm:mt-4 text-sm sm:text-lg px-4">
                    {selectedPhoto.photo.caption}
                  </p>
                )}
                <p className="text-white/60 text-xs sm:text-sm mt-2">
                  {selectedPhoto.index + 1} / {selectedPhoto.eventPhotos.length}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

