"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // .row-p (project rows) manage their own reveal state internally, since
    // they re-render on click and would wipe an imperatively-added class.
    document.querySelectorAll(".rv:not(.row-p)").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
