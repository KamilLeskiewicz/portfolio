"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CVPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2"
      >
        <Maximize2 className="h-4 w-4" />
        Preview CV
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm border-b border-border">
                <h3 className="text-lg font-semibold">CV Preview</h3>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="/Kamil.pdf"
                      download
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="relative h-[calc(90vh-80px)] overflow-auto">
                <iframe
                  src="/Kamil.pdf#toolbar=0"
                  className="w-full h-full border-0"
                  title="CV Preview"
                />
              </div>

              <div className="md:hidden absolute inset-0 flex items-center justify-center bg-background/95 p-8 text-center">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    PDF preview is not available on mobile devices.
                  </p>
                  <Button asChild>
                    <a
                      href="/Kamil.pdf"
                      download
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download CV Instead
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

