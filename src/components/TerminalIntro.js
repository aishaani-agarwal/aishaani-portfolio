"use client";

import { useEffect, useRef, useState } from "react";

const SCRIPT = [
  { t: "$ whoami", d: 34, pause: 250, cls: "ok" },
  { t: "> loading profile…", d: 12, pause: 350, cls: "ghost" },
  { t: "", d: 0, pause: 80, name: true },
  { t: "> cs @ uw–madison · class of 2030", d: 14, pause: 200, cls: "ghost" },
  { t: "> status: building things", d: 14, pause: 300, cls: "ghost" },
];

const BURST = [
  "compiling portfolio…",
  "✓ projects/ (7 modules)",
  "✓ experience/ (4 roles)",
  "✓ research/ (1 published paper)",
  "build succeeded in 0.4s",
  "launching →",
];

export default function TerminalIntro() {
  const introRef = useRef(null);
  const bodyRef = useRef(null);
  const skipRef = useRef(null);
  const [away, setAway] = useState(false);
  const [compiling, setCompiling] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setRemoved(true);
      document.body.classList.remove("locked");
      document.body.classList.add("entered");
      return;
    }

    const intro = introRef.current;
    const body = bodyRef.current;
    const skip = skipRef.current;
    const timers = [];
    let done = false;
    let ready = false;

    function reveal() {
      setAway(true);
      document.body.classList.remove("locked");
      document.body.classList.add("entered");
      timers.push(setTimeout(() => setRemoved(true), 1000));
    }

    function enter() {
      if (done) return;
      done = true;
      setCompiling(true);
      let i = 0;
      const iv = setInterval(() => {
        if (i < BURST.length) {
          const l = document.createElement("span");
          l.className = "ln ghost";
          l.textContent = "  " + BURST[i++];
          body.appendChild(l);
          body.scrollTop = body.scrollHeight;
        } else {
          clearInterval(iv);
          reveal();
        }
      }, 90);
      timers.push(iv);
    }

    let li = 0;
    function typeLine() {
      if (li >= SCRIPT.length) {
        ready = true;
        const p = document.createElement("div");
        p.className = "press";
        p.textContent = "press any key — or tap — to enter";
        body.appendChild(p);
        requestAnimationFrame(() => p.classList.add("show"));
        return;
      }
      const item = SCRIPT[li++];

      if (item.name) {
        const n = document.createElement("span");
        n.className = "name-out";
        body.appendChild(n);
        const full = "aishaani agarwal";
        let ci = 0;
        const iv = setInterval(() => {
          ci++;
          const typed = full.slice(0, ci);
          const split = typed.split(" ");
          n.innerHTML =
            split[0] +
            (split[1] !== undefined ? " <em>" + split[1] + "</em>" : "") +
            '<span class="caret"></span>';
          if (ci >= full.length) {
            clearInterval(iv);
            timers.push(setTimeout(typeLine, item.pause));
          }
        }, 55);
        timers.push(iv);
        return;
      }

      const el = document.createElement("span");
      el.className = "ln " + (item.cls || "");
      body.appendChild(el);
      let ci = 0;
      const iv = setInterval(() => {
        ci++;
        el.textContent = item.t.slice(0, ci);
        if (ci >= item.t.length) {
          clearInterval(iv);
          timers.push(setTimeout(typeLine, item.pause));
        }
      }, item.d);
      timers.push(iv);
    }

    timers.push(setTimeout(typeLine, 400));

    function handleKeydown() {
      if (ready) enter();
    }
    function handleIntroClick(e) {
      if (e.target === skip) return;
      if (ready) enter();
    }
    function handleSkip() {
      if (!done) {
        done = true;
        reveal();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    intro.addEventListener("click", handleIntroClick);
    skip.addEventListener("click", handleSkip);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      intro.removeEventListener("click", handleIntroClick);
      skip.removeEventListener("click", handleSkip);
      timers.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
    };
  }, []);

  if (removed) return null;

  return (
    <div
      id="intro"
      ref={introRef}
      className={[away ? "away" : "", compiling ? "compiling" : ""].join(" ").trim()}
    >
      <div className="term">
        <div className="term-bar">
          <span className="o"></span>
          <span className="o"></span>
          <span className="o"></span>
          <span className="title">aishaani.in — zsh</span>
        </div>
        <div className="term-body" ref={bodyRef}></div>
      </div>
      <button className="skip" ref={skipRef}>
        skip →
      </button>
    </div>
  );
}
