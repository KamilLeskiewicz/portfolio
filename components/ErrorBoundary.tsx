"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} reset={() => this.setState({ hasError: false })} />;
    }

    return this.props.children;
  }
}

function ErrorFallback({ error, reset }: { error?: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex p-6 rounded-full bg-red-500/10 mb-8"
        >
          <AlertTriangle className="h-16 w-16 text-red-500" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          We encountered an unexpected error. Don't worry, it's not your fault!
        </p>

        {process.env.NODE_ENV === "development" && error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 p-4 rounded-lg bg-muted/50 text-left overflow-auto max-h-40"
          >
            <p className="text-sm font-mono text-red-400">
              {error.toString()}
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => {
              reset();
              window.location.reload();
            }}
            size="lg"
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <Link href="/">
              <Home className="h-5 w-5" />
              Go Home
            </Link>
          </Button>
        </motion.div>

        <p className="mt-8 text-sm text-muted-foreground">
          If the problem persists, please{" "}
          <Link href="#contact" className="text-primary hover:underline">
            contact me
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

