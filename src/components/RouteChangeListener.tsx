"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteChangeListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Small timeout allows DOM to update before initializing scripts
      const timer = setTimeout(() => {
        // @ts-ignore
        if (typeof window.initThemeScripts === "function") {
          // @ts-ignore
          window.initThemeScripts();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
