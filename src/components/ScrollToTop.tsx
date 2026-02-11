import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToTopNow() {
  // window
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  // document scroll roots
  const root = document.scrollingElement as HTMLElement | null;
  if (root) root.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // app scroll container (det som ofte er den egentlige scrolleren)
  const el = document.querySelector("[data-scroll-container]") as HTMLElement | null;
  if (el) el.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();

  // Hindrer at browser/React-router prøver å “restore” scroll
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) return;

    // Kjør nå + etter 1-2 frames for å vinne mot sen layout
    scrollToTopNow();
    requestAnimationFrame(() => {
      scrollToTopNow();
      requestAnimationFrame(scrollToTopNow);
    });
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
