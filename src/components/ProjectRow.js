"use client";

import { useEffect, useRef, useState } from "react";
import ChipLogo from "./ChipLogo";

function MediaImage({ src, alt }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;
    function handleError() {
      setFailed(true);
    }
    el.addEventListener("error", handleError);
    el.src = src;
    return () => el.removeEventListener("error", handleError);
  }, [src]);

  if (failed) return null;
  return <img ref={ref} alt={alt || ""} />;
}

function MediaVideo({ src }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;
    function handleError() {
      setFailed(true);
    }
    el.addEventListener("error", handleError);
    el.src = src;
    return () => el.removeEventListener("error", handleError);
  }, [src]);

  if (failed) return null;
  return <video ref={ref} controls muted playsInline preload="metadata" />;
}

export default function ProjectRow({
  no,
  logo,
  title,
  what,
  link,
  role,
  description,
  bullets,
  stack,
  media,
}) {
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function handleClick(e) {
    if (e.target.closest("a")) return;
    setOpen((o) => !o);
  }

  return (
    <div
      ref={rowRef}
      className={`row-p rv${revealed ? " in" : ""}${open ? " open" : ""}`}
      onClick={handleClick}
    >
      <span className="no">{no}</span>
      <div className="titlebox">
        <ChipLogo src={logo} alt={title} />
        <h3>{title}</h3>
      </div>
      <span className="what">{what}</span>
      {link ? (
        <a className="go" href={link} target="_blank" rel="noopener">
          code ↗
        </a>
      ) : (
        <span className="go">open +</span>
      )}
      <div className="more">
        <div className="role">{role}</div>
        {media && (
          <div className="media">
            {media.img && <MediaImage src={media.img} alt={media.imgAlt} />}
            {media.video && <MediaVideo src={media.video} />}
          </div>
        )}
        <p>{description}</p>
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="stack">
          {stack.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
