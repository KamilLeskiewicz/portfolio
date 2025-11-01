"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useImageProtection } from "@/hooks/useImageProtection";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

interface Event {
  name: string;
  date: string;
  description: string;
  photos: Photo[];
}

export default function PhotoGallery() {
  useImageProtection();
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
          alt: "Award ceremony",
          caption: "Receiving award",
        },
        {
          src: "/gallery/hackathon2025(1).jpg",
          alt: "Award ceremony",
          caption: "Receiving award",
        },
        {
          src: "/gallery/hackathon2025(2).jpg",
          alt: "Project presentation",
          caption: "Project presentation",
        },
        {
          src: "/gallery/hackathon2025(3).jpg",
          alt: "Project presentation",
          caption: "Project presentation",
        },
        {
          src: "/gallery/hackathon2025(4).jpg",
          alt: "Project presentation",
          caption: "Project presentation",
        },
        {
          src: "/gallery/hackathon2025(5).jpg",
          alt: "Project presentation",
          caption: "Project presentation",
        },
        {
          src: "/gallery/hackathon2025(work).jpg",
          alt: "Work on the project",
          caption: "Work on the project",
        },
        {
          src: "/gallery/hackathon2025(work2).jpg",
          alt: "Work on the project",
          caption: "Work on the project",
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

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Photo Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Moments captured from hackathons, conferences, and learning experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
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
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{event.name}</h3>
                      <span className="text-sm text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {event.photos.map((photo, photoIndex) => (
                      <motion.div
                        key={photoIndex}
                        variants={photoVariants}
                        className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer select-none"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                      >
                        {!loadedImages.has(photo.src) && (
                          <Skeleton className="absolute inset-0 z-10" />
                        )}
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110 select-none"
                          onLoad={() => handleImageLoad(photo.src)}
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                        <div 
                          className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end z-20"
                          onClick={() => handlePhotoClick(photo, photoIndex, event.photos)}
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevPhoto();
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextPhoto();
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center select-none"
                onClick={(e) => e.stopPropagation()}
                onContextMenu={(e) => e.preventDefault()}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={selectedPhoto.photo.src}
                    alt={selectedPhoto.photo.alt}
                    width={1920}
                    height={1080}
                    className="object-contain max-h-[80vh] w-auto h-auto select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div 
                    className="absolute inset-0 z-10"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  ></div>
                </div>
                {selectedPhoto.photo.caption && (
                  <p className="text-white text-center mt-4 text-lg">
                    {selectedPhoto.photo.caption}
                  </p>
                )}
                <p className="text-white/60 text-sm mt-2">
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

