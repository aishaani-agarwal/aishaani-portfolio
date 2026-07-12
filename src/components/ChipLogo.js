"use client";

import { useEffect, useRef, useState } from "react";

export default function ChipLogo({ src, alt = "" }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img || !src) return;

    function handleError() {
      setFailed(true);
    }

    img.addEventListener("error", handleError);
    img.src = src;

    return () => img.removeEventListener("error", handleError);
  }, [src]);

  if (!src || failed) return null;

  return (
    <div className="chip-logo">
      <img ref={imgRef} alt={alt} />
    </div>
  );
}
