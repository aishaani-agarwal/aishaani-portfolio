"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const c = cursorRef.current;
    let x = 0,
      y = 0,
      tx = 0,
      ty = 0,
      raf;

    function handleMove(e) {
      tx = e.clientX;
      ty = e.clientY;
    }
    window.addEventListener("mousemove", handleMove);

    function loop() {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      c.style.left = x + "px";
      c.style.top = y + "px";
      raf = requestAnimationFrame(loop);
    }
    loop();

    function onEnter() {
      c.classList.add("on");
    }
    function onLeave() {
      c.classList.remove("on");
    }
    const targets = document.querySelectorAll("a, .row-p, .skip");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div className="cur" ref={cursorRef}>
      <div className="d"></div>
    </div>
  );
}
