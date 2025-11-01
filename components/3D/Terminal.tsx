"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

const commands = [
  { cmd: "npm run dev", output: "> Ready on http://localhost:3000" },
  { cmd: "git status", output: "On branch main\nChanges: portfolio improvements" },
  { cmd: "whoami", output: "kamil-leskiewicz" },
  { cmd: "ls projects", output: "cyk.pl  portfolio  hackathon-projects" },
  { cmd: "cat skills.txt", output: "React, Next.js, TypeScript\nNode.js, Express\nMongoDB, PostgreSQL" },
];

export default function Terminal() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const currentCommand = commands[currentCommandIndex];
    if (!currentCommand) return;

    if (isTyping) {
      if (displayedText.length < currentCommand.cmd.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentCommand.cmd.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setShowOutput(true);
        }, 500);
      }
    } else {
      if (showOutput) {
        const timer = setTimeout(() => {
          setShowOutput(false);
          setDisplayedText("");
          setIsTyping(true);
          setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [displayedText, isTyping, showOutput, currentCommandIndex]);

  const currentCommand = commands[currentCommandIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 md:p-4 pointer-events-none"
    >
      <div className="w-full max-w-[95%] sm:max-w-xl md:max-w-2xl bg-background/90 backdrop-blur-sm border border-border rounded-md sm:rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 bg-muted/50 border-b border-border">
          <div className="flex gap-1 sm:gap-1.5">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 ml-2 sm:ml-3 md:ml-4">
            <TerminalIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-muted-foreground" />
            <span className="text-[10px] sm:text-xs text-muted-foreground font-mono">terminal</span>
          </div>
        </div>
        <div className="p-2 sm:p-3 md:p-4 font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
            <span className="text-primary">$</span>
            <span className="text-foreground break-all">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </div>
          {showOutput && currentCommand && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1.5 sm:mt-2 text-muted-foreground whitespace-pre-line break-words"
            >
              {currentCommand.output}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

