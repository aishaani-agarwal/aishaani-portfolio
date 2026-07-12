"use client";

import TerminalIntro from "@/components/TerminalIntro";
import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";
import ProjectRow from "@/components/ProjectRow";
import ChipLogo from "@/components/ChipLogo";

function hideOnError(e) {
  e.currentTarget.style.display = "none";
}

const MARQUEE_ITEMS = [
  "computer vision",
  "full-stack",
  "embedded systems",
  "ai apps",
  "codebreaking",
  "published research",
  "teaching",
];

const PROJECTS = [
  {
    no: "01",
    logo: "/image/dance.jpg",
    title: "dance decoded",
    what: "ai dance-learning platform",
    link: null,
    role: "full-stack developer · founder-built",
    description:
      "I built an AI platform that watches you dance and teaches you to dance better — and shipped it live at dancedecoded.in.",
    bullets: [
      <>
        Integrated <b>real-time motion capture</b> using MediaPipe pose estimation, running
        live in the browser during practice sessions.
      </>,
      <>
        Designed and implemented a <b>custom motion-analysis algorithm</b> that compares a
        learner&apos;s joint positions against reference choreography and scores precision.
      </>,
      <>
        Built the full product end-to-end in <b>Django and Python</b> — the CV pipeline, the
        feedback UI, and deployment.
      </>,
    ],
    stack: ["django", "python", "mediapipe", "computer vision"],
  },
  {
    no: "02",
    logo: "/image/examai.jpg",
    title: "examai",
    what: "generates papers, grades handwriting",
    link: "https://github.com/aishaani-agarwal",
    role: "full-stack developer · solo build",
    description:
      "A full-stack system that generates complete CBSE question papers and then grades scanned handwritten answer sheets — the whole exam cycle, automated.",
    bullets: [
      <>
        Engineered a <b>document-processing pipeline</b>: PDF text extraction → Ghostscript
        image conversion → Claude Vision reading actual handwriting → Puppeteer rendering
        final reports.
      </>,
      <>
        Built the <b>REST API backend in Express</b> handling uploads, AI inference, PDF
        generation, and async client-server flows.
      </>,
      <>
        Implemented <b>structured prompt engineering</b> and response parsing to turn raw
        model output into color-coded grading reports.
      </>,
      <>
        Designed <b>class-level analytics</b> — rankings, averages, and the most frequently
        missed questions across a whole class.
      </>,
    ],
    stack: ["node.js", "express", "claude api", "ghostscript", "puppeteer"],
  },
  {
    no: "03",
    logo: "/image/sticker.jpg",
    title: "sticker physics",
    what: "webcam objects become physics bodies",
    link: "https://github.com/aishaani-agarwal",
    role: "developer · computer vision + simulation",
    media: {
      img: "/image/sticker-physics.jpg",
      imgAlt: "Sticker Physics — detected objects as physics bodies",
      video: "/image/sticker-physics-demo.mp4",
    },
    description:
      "Point a camera at colored physical objects and they become live collision bodies inside a 2D physics world — a tangible interface with no controller at all.",
    bullets: [
      <>
        Implemented the <b>vision pipeline from scratch</b> in OpenCV.js: HSV color
        segmentation, contour detection, and oriented bounding-box extraction.
      </>,
      <>
        Wrote <b>coordinate transformation and smoothing algorithms</b> to kill detection
        jitter while staying real-time.
      </>,
      <>
        Integrated <b>Matter.js</b> so rigid bodies spawn and track detected objects&apos;
        positions and rotations frame-by-frame.
      </>,
      <>
        Built a runtime <b>control dashboard</b> for live tuning of both CV and physics
        parameters.
      </>,
    ],
    stack: ["javascript", "opencv.js", "matter.js"],
  },
  {
    no: "04",
    logo: "/image/servo.jpg",
    title: "clap-controlled servo",
    what: "esp32 + microphone + your hands",
    link: "https://github.com/aishaani-agarwal",
    role: "embedded systems developer · hardware + firmware",
    description:
      "A WiFi-enabled servo system whose web interface is hosted directly on the ESP32 itself — control it from your phone's browser, or just clap.",
    bullets: [
      <>
        Programmed <b>HTTP request handling, PWM motor control, and GPIO management</b> in
        C++ on the Arduino framework.
      </>,
      <>
        Added a <b>microphone module</b> for sound-triggered control, so a clap drives the
        motor alongside browser commands.
      </>,
      <>
        Built the <b>responsive control page served from the chip</b>, translating taps into
        low-latency physical movement.
      </>,
      <>
        Did the unglamorous real part too: <b>firmware flashing, serial debugging, and
        hardware integration</b>.
      </>,
    ],
    stack: ["c++", "esp32", "arduino", "pwm"],
  },
  {
    no: "05",
    logo: "/image/mediate.jpg",
    title: "mediateai",
    what: "ai conflict mediation, with voice",
    link: "https://github.com/aishaani-agarwal",
    role: "full-stack developer · solo build",
    description:
      "An AI mediation platform where people privately submit disputes or run live, voice-driven mediation sessions with an AI mediator in the middle.",
    bullets: [
      <>
        Built a <b>secure client-server architecture</b> in Express keeping API keys
        server-side while routing AI requests through REST endpoints.
      </>,
      <>
        Integrated <b>speech recognition and synthesis</b> via the Web Speech API for
        real-time spoken conversation.
      </>,
      <>
        Implemented <b>relationship-aware prompting</b> so the mediator&apos;s tone adapts —
        a roommate dispute reads differently than a business one.
      </>,
      <>
        Designed a <b>multi-screen responsive interface</b> with live conversation workflows
        and smooth transitions.
      </>,
    ],
    stack: ["node.js", "express", "claude api", "web speech api"],
  },
  {
    no: "06",
    logo: "/image/koala.jpg",
    title: "koala id generator",
    what: "excel → print-ready id cards",
    link: "https://github.com/aishaani-agarwal",
    role: "full-stack developer · real client: a preschool",
    description:
      "A batch system that turns a preschool's Excel records and student photos into print-ready, personalized ID cards — built for an actual school's actual problem.",
    bullets: [
      <>
        Built a <b>FastAPI microservice running U²-Net</b> (a deep-learning model) for
        automatic background removal on uploaded photos.
      </>,
      <>
        Designed a <b>Canvas-based rendering engine</b> with custom layouts, positioning,
        transformations, and live preview.
      </>,
      <>
        Implemented <b>Excel parsing and automated photo-to-record matching</b>, plus ZIP
        export for whole batches in one click.
      </>,
      <>
        Deployed the frontend on <b>GitHub Pages</b> and the ML backend on{" "}
        <b>Hugging Face Spaces</b>.
      </>,
    ],
    stack: ["python", "fastapi", "u²-net", "canvas api", "hugging face"],
  },
  {
    no: "07",
    logo: null,
    title: "unbound",
    what: "career guidance for underserved students",
    link: null,
    role: "full-stack developer",
    description:
      "My longest-running project: a career-guidance web app for students who don't have access to counselors, live at unboundonline.in.",
    bullets: [
      <>
        Designed and built the entire app in <b>Next.js</b>, from information architecture to
        UI.
      </>,
      <>
        Implemented a <b>custom matching algorithm</b> that suggests scholarships, programs,
        and opportunities to marginalized students.
      </>,
      <>Launched and maintained it publicly — real users, real deployments, real bug reports.</>,
    ],
    stack: ["next.js", "html", "css"],
  },
];

const EXPERIENCE = [
  {
    dates: "may – jul 2026",
    logo: "/image/kristalball.png",
    alt: "Kristalball",
    name: "Kristalball",
    org: "front-end developer · on site",
    description:
      "Built and deployed ML product-mapping models hitting 89% accuracy. Wrote Python + Apps Script automation that cut pre-onboarding from 2–4 hours to ~25 minutes, and a reporting pipeline that took monthly reports from 4 hours to 45. Shipped production code to GitLab.",
  },
  {
    dates: "may – jun 2025",
    logo: "/image/nisarg.png",
    alt: "Nisarg Foundation",
    name: "Nisarg Foundation",
    org: "cs education intern · remote",
    description:
      "Designed a foundational computer-science curriculum for underprivileged children and taught it end to end — adapting every lesson for students with little prior exposure to technology.",
  },
  {
    dates: "may – jun 2024",
    logo: "/image/trademo.jpg",
    alt: "Trademo",
    name: "Trademo",
    org: "front-end developer · remote",
    description:
      "Shipped responsive UI in HTML/CSS/JS with the engineering team at a global supply-chain intelligence company. Fixed UI/UX bugs, prototyped new features, and sat in client meetings turning feedback into design changes.",
  },
  {
    dates: "may 2023 – present",
    logo: "/image/careforall.png",
    alt: "CareForALL",
    name: "CareForALL",
    org: "director, social marketing",
    description:
      "Rose from volunteer to director. Led campaigns and a video team; organized 15+ medical camps reaching 1000+ people across 7+ NGOs; raised ₹200K; covered in two national newspapers.",
  },
];

export default function Home() {
  return (
    <>
      <TerminalIntro />
      <div className="grain"></div>
      <CustomCursor />
      <ScrollReveal />

      <header>
        <a className="logo" href="#top">
          aishaani <em>agarwal</em>
        </a>
        <nav>
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#recognition">awards</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <span className="mono hello">hi, i&apos;m</span>
        <h1>
          <span className="row">
            <span>aishaani</span>
          </span>
          <span className="row">
            <span>
              <em>agarwal</em>
            </span>
          </span>
        </h1>
        <div className="hero-sub">
          <p>
            Incoming <b>computer science</b> freshman at <b>UW–Madison</b>, class of 2030. I
            build software that touches the real world.
          </p>
          <span className="mono">bangalore → madison, wi</span>
        </div>
        <span className="mono down">scroll ↓</span>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="track" id="mtrack">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>
              <i>✦</i>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work">
        <div className="shead rv">
          <h2>
            tech <em>projects</em>
          </h2>
          <span className="mono">click a row to expand · 07 builds</span>
        </div>

        <div className="index">
          {PROJECTS.map((p) => (
            <ProjectRow key={p.no} {...p} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="shead rv">
          <h2>
            where i&apos;ve <em>worked</em>
          </h2>
          <span className="mono">2023 — now</span>
        </div>
        <div className="xp rv">
          {EXPERIENCE.map((x) => (
            <div className="xp-cell" key={x.name}>
              <div className="top">
                <span className="mono">{x.dates}</span>
                <ChipLogo src={x.logo} alt={x.alt} />
              </div>
              <h3>{x.name}</h3>
              <div className="org">{x.org}</div>
              <p>{x.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AWARDS & RESEARCH */}
      <section id="recognition">
        <div className="shead rv">
          <h2>
            awards &amp; <em>research</em>
          </h2>
          <span className="mono">published · won</span>
        </div>
        <div className="aw rv">
          <div className="aw-cell">
            <span className="mono">published research · gold crest award · 2025</span>
            <h3>
              Investigating Awareness and Perception of{" "}
              <em>Bias in AI-Driven Platforms</em>
            </h3>
            <p>
              A survey-based study I authored on how young people perceive bias and
              accountability inside AI systems — who they think is responsible when an
              algorithm gets it wrong, and how aware they are that it can. Published in the
              International Journal of Humanities and Social Science, and awarded the Gold
              Crest Award.
            </p>
            <span className="cite">international journal of humanities and social science (ijhss)</span>
            <a
              className="paper-link"
              href="https://www.internationaljournalssrg.org/IJHSS/paper-details?Id=546"
              target="_blank"
              rel="noopener"
            >
              read the paper ↗
            </a>
          </div>
          <div className="aw-cell">
            <span className="mono">first place · august 2025</span>
            <h3>
              Invictus: <em>Code &amp; Capture</em>
            </h3>
            <p>
              Won first place in a competitive coding and cryptography event in Bangalore —
              real-time codebreaking and digital treasure hunts. Cracked challenges with
              Hashcat and classical ciphers under time pressure, as a team, without panicking
              (mostly).
            </p>
            <span className="cite">bangalore · hashcat · classical ciphers · speed + logic</span>
            <a className="paper-link lb-open" href="/image/invictus.jpg">
              view certificate ↗
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="shead rv">
          <h2>
            about <em>me</em>
          </h2>
        </div>
        <div className="about">
          <div className="rv">
            <p className="about-big">
              I like the moment when something on a screen{" "}
              <em>reaches into the real world</em> — a camera that reads movement, a clap that
              moves a motor, a model that reads handwriting.
            </p>
            <p className="body">
              Most of my work sits where sensing meets software: computer vision, embedded
              systems, and AI applications — ideally solving a problem for a real person,
              whether that&apos;s a preschool, a student without a counselor, or a class full
              of ungraded exams. This fall I&apos;m starting computer science at the
              University of Wisconsin–Madison.
            </p>
            <div className="uw-row">
              <ChipLogo src="/image/uw.png" alt="UW–Madison" />
              <div className="txt">
                <b>University of Wisconsin–Madison</b>
                <span>b.s. computer science · class of 2030</span>
              </div>
            </div>
          </div>
          <div className="facts rv">
            <img
              className="portrait"
              src="/image/me.jpg"
              alt="Aishaani Agarwal"
              onError={hideOnError}
            />
            <div className="fact">
              <span className="k">studying</span>
              <span className="v">
                Computer Science, UW–Madison <i>· class of 2030</i>
              </span>
            </div>
            <div className="fact">
              <span className="k">before</span>
              <span className="v">Harvest International School, Bangalore</span>
            </div>
            <div className="fact">
              <span className="k">languages</span>
              <span className="v">Python · Java · JavaScript · C++</span>
            </div>
            <div className="fact">
              <span className="k">frameworks</span>
              <span className="v">Next.js · Django · Express · FastAPI</span>
            </div>
            <div className="fact">
              <span className="k">ai &amp; vision</span>
              <span className="v">Claude API · OpenCV · MediaPipe · OCR</span>
            </div>
            <div className="fact">
              <span className="k">hobbies</span>
              <span className="v">filming &amp; editing · codebreaking · teaching</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <span className="mono rv">contact</span>
        <h2 className="rv">
          <a href="mailto:aishaani@gmail.com">
            aishaani<em>@gmail.com</em>
          </a>
        </h2>
        <div className="clinks rv">
          <a href="https://github.com/aishaani-agarwal" target="_blank" rel="noopener">
            github
          </a>
          <a
            href="https://www.linkedin.com/in/aishaani-agarwal-186abb26a/"
            target="_blank"
            rel="noopener"
          >
            linkedin
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 aishaani agarwal</span>
        <span>madison, wi</span>
      </footer>

      <Lightbox />
    </>
  );
}
