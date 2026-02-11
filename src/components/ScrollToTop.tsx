import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function hardScrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) return;

    // 1) Scroll til topp
    hardScrollTop();

    // 2) Fjern fokus så browser ikke autoscroller til et element
    const active = document.activeElement as HTMLElement | null;
    if (active && typeof active.blur === "function") {
      active.blur();
    }

    // 3) Kjør en gang til etter paint/layout
    requestAnimationFrame(() => {
      hardScrollTop();
      requestAnimationFrame(hardScrollTop);
    });
  }, [pathname, search, hash]);

  return null;
}
