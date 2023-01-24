// Custom Hooks

import { useEffect } from "react";

// Page Title
export const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => {
      document.title = prevTitle;
    };
  }, []);
};

// Smooth scroll
export const scrollToView = (selector) => {
  const element = document.getElementById(selector);
  element && element.scrollIntoView({ behavior: "smooth" });
};

// Page Reset
export const pageFromStart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
};
