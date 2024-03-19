"use client";
import { useEffect, useRef, useState } from "react";

/**
+ * useIsMobile
+ *
+ * Hook that returns a boolean indicating if the current screen size is
+ * less than or equal to 768px (the threshold for "mobile").
+ *
+ * @returns {boolean} isMobile - true if the current screen size is less than
+ * or equal to 768px, false otherwise.
+ */
export default function useIsMobile(): boolean {
  const [screenSize, setScreenSize] = useState<number | null>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
    };
  }, []);

  return screenSize !== null && screenSize <= 768;
}
