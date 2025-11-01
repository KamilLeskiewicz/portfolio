"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    clarity?: (method: string, ...args: any[]) => void;
  }
}

export default function Clarity({ projectId }: { projectId: string }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production" && projectId && typeof window !== "undefined") {
      const initializeClarity = () => {
        if (window.clarity) {
          window.clarity("set", projectId);
          

          window.clarity("consent");
          
          return true;
        }
        return false;
      };

      let checkClarityInterval: NodeJS.Timeout | null = null;
      let timeoutId: NodeJS.Timeout | null = null;

      if (!initializeClarity()) {
        checkClarityInterval = setInterval(() => {
          if (initializeClarity()) {
            if (checkClarityInterval) clearInterval(checkClarityInterval);
            if (timeoutId) clearTimeout(timeoutId);
          }
        }, 100);
        
        timeoutId = setTimeout(() => {
          if (checkClarityInterval) clearInterval(checkClarityInterval);
        }, 5000);
      }

      return () => {
        if (checkClarityInterval) clearInterval(checkClarityInterval);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, [projectId]);

  if (process.env.NODE_ENV !== "production" || !projectId) {
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `,
      }}
    />
  );
}

