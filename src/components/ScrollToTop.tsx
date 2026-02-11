// src/components/ScrollToTop.tsx
import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollAllToTop() {
  // 1) Window
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  // 2) Dokument-scroll (forskjellige browsere bruker ulike)
  const docEls: Array<HTMLElement | null | undefined> = [
    document.scrollingElement as HTMLElement | null,
    document.documentElement,
    document.body,
  ];
  for (const el of docEls) {
    if (el) el.scrollTop = 0;
  }

  // 3) Vanlige app-containere som ofte har overflow-scroll
  const selectors = [
    "main",
    ".app-content",
    "#app-content",
    "[data-scroll-container]",
  ];

  for (const sel of selectors) {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (!el) continue;

    // Bare scrolle hvis den faktisk kan scrolle
    const canScroll = el.scrollHeight > el.clientHeight;
    if (canScroll) el.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  // Hindrer browser scroll-restore (viktig!)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    // Hvis du vil at hash (#seksjon) skal styre scroll, behold dette.
    // (Hvis ikke: fjern disse linjene, så går ALT til topp uansett.)
    if (hash) return;

    // Kjør nå + etter 1-2 frames for å vinne mot layout-shifts
    scrollAllToTop();
    requestAnimationFrame(() => {
      scrollAllToTop();
      requestAnimationFrame(() => scrollAllToTop());
    });
  }, [pathname, search, hash]);

  return null;
}
