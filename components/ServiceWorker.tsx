"use client";

import { useEffect } from "react";
import { basePath, withBasePath } from "@/lib/basePath";

// Registers the service worker after the page loads. The worker caches
// same-origin https responses (cache-first) and purges stale caches on each new
// deploy. On http localhost the worker registers but caches nothing.
export function ServiceWorker() {
  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
    const register = () => {
      navigator.serviceWorker
        .register(withBasePath("/sw.js"), { scope: `${basePath}/` })
        .catch(() => {
          /* registration failures are non-fatal */
        });
    };
    if (document.readyState === "complete") register();
    else {
      window.addEventListener("load", register);
      return () => window.removeEventListener("load", register);
    }
  }, []);

  return null;
}
