import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamil Leśkiewicz | Programista Fullstack & Web Developer | Portfolio",
  description: "Kamil Leśkiewicz - programista fullstack specjalizujący się w React, Next.js, TypeScript i Node.js. Portfolio projektów web development i aplikacji webowych.",
  keywords: [
    "Kamil Leśkiewicz",
    "programista",
    "fullstack developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "portfolio programisty",
    "JavaScript developer",
  ],
  authors: [{ name: "Kamil Leśkiewicz" }],
  creator: "Kamil Leśkiewicz",
  publisher: "Kamil Leśkiewicz",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://ewilanow.pl",
    siteName: "Kamil Leśkiewicz - Portfolio",
    title: "Kamil Leśkiewicz | Programista Fullstack & Web Developer",
    description: "Portfolio Kamila Leśkiewicza - programista fullstack specjalizujący się w tworzeniu nowoczesnych aplikacji webowych.",
    images: [
      {
        url: "/about.JPEG",
        width: 1200,
        height: 630,
        alt: "Kamil Leśkiewicz - Programista Fullstack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamil Leśkiewicz | Programista Fullstack & Web Developer",
    description: "Portfolio Kamila Leśkiewicza - programista fullstack specjalizujący się w React, Next.js i TypeScript.",
    images: ["/about.JPEG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kamilleskiewicz.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kamil Leśkiewicz",
  alternateName: "K. Leśkiewicz",
  url: "https://kamilleskiewicz.vercel.app",
  image: "/about.JPEG",
  jobTitle: "Fullstack Developer",
  worksFor: {
    "@type": "Organization",
    name: "RedSteel",
  },
  description: "Programista fullstack specjalizujący się w React, Next.js, TypeScript i Node.js",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Web Development",
    "Fullstack Development",
    "CSS",
    "Tailwind CSS",
  ],
  sameAs: [
    "https://github.com/KamilLeskiewicz",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
