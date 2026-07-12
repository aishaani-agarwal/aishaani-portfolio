"use client";

import { useEffect, useRef, useState } from "react";

export default function Lightbox() {
  const [src, setSrc] = useState("");
  const [open, setOpen] = useState(false);
  const lbRef = useRef(null);

  useEffect(() => {
    function handleOpenClick(e) {
      const trigger = e.target.closest(".lb-open");
      if (!trigger) return;
      e.preventDefault();
      setSrc(trigger.getAttribute("href"));
      setOpen(true);
    }
    document.addEventListener("click", handleOpenClick);
    return () => document.removeEventListener("click", handleOpenClick);
  }, []);

  useEffect(() => {
    const lb = lbRef.current;
    function close() {
      setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") close();
    }
    lb.addEventListener("click", close);
    window.addEventListener("keydown", onKey);
    return () => {
      lb.removeEventListener("click", close);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      className={`lightbox${open ? " show" : ""}`}
      id="lightbox"
      ref={lbRef}
      role="dialog"
      aria-label="Image preview"
    >
      <button className="lb-close">close ✕</button>
      <img id="lbImg" src={src} alt="Preview" />
      <span className="lb-hint">click anywhere or press esc to close</span>
    </div>
  );
}
