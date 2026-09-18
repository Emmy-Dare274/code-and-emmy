"use client";

// Interactive hero: hovering the outer left third of the photo lane (or the
// developer text) hides the designer column entirely and slides the photo
// far right, with code snippets visible. Hovering the outer right third (or
// designer text) does the mirror opposite, with code snippets hidden. The
// middle third is a dead zone — deliberately does nothing, so resting the
// cursor near the center doesn't cause any movement. Clicking the photo
// goes to /about.

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiDjango,
  SiPython,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { FaFigma, FaPenRuler, FaUniversalAccess, FaLayerGroup } from "react-icons/fa6";

type HoverSide = "left" | "right" | null;

const PHOTO_TRAVEL = 260;

const devStack = [
  { label: "React", Icon: SiReact },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "Django", Icon: SiDjango },
  { label: "Python", Icon: SiPython },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "Git", Icon: SiGit },
];

const designSkills = [
  { label: "Figma", Icon: FaFigma },
  { label: "UI/UX Design", Icon: FaPenRuler },
  { label: "Accessibility", Icon: FaUniversalAccess },
  { label: "Design Systems", Icon: FaLayerGroup },
];

type CodeLine = { text: string; tone: "keyword" | "type" | "string" | "punct" };
type CodeFragment = { lines: CodeLine[]; top: string; left: string; rotate: number };

const codeFragments: CodeFragment[] = [
  {
    lines: [
      { text: "class Project(models.Model):", tone: "keyword" },
      { text: "    title = models.CharField(max_length=120)", tone: "type" },
      { text: "    is_live = models.BooleanField(default=True)", tone: "type" },
    ],
    top: "6%",
    left: "4%",
    rotate: -3,
  },
  {
    lines: [
      { text: "const fetchProjects = async () => {", tone: "keyword" },
      { text: '  const res = await fetch("/api/projects");', tone: "string" },
      { text: "  return res.json();", tone: "punct" },
      { text: "};", tone: "punct" },
    ],
    top: "22%",
    left: "54%",
    rotate: 3,
  },
  {
    lines: [
      { text: '<section class="hero">', tone: "type" },
      { text: "  <h1>Emmanuel Oluwadare</h1>", tone: "keyword" },
      { text: "</section>", tone: "type" },
    ],
    top: "56%",
    left: "6%",
    rotate: -2,
  },
  {
    lines: [
      { text: "def get_queryset(self):", tone: "keyword" },
      { text: "    return Project.objects.filter(is_live=True)", tone: "type" },
    ],
    top: "76%",
    left: "52%",
    rotate: 4,
  },
  {
    lines: [
      { text: ".card:hover {", tone: "keyword" },
      { text: "  transform: translateY(-4px);", tone: "string" },
      { text: "}", tone: "punct" },
    ],
    top: "40%",
    left: "8%",
    rotate: 2,
  },
];

export default function Hero() {
  const [hover, setHover] = useState<HoverSide>(null);

  // Measured against the LANE (e.currentTarget), which never moves — only
  // the photo inside it does. This is the fix for the shaking bug: using
  // the photo's own rect as the reference created a feedback loop, since
  // the rect changed as a result of the very state this function sets.
  function handleLaneHover(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;

    if (relativeX < 0.33) {
      setHover("left");
    } else if (relativeX > 0.67) {
      setHover("right");
    } else {
      setHover(null); // dead zone — the middle third never triggers movement
    }
  }

  const grayscaleClip =
    hover === "left"
      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      : hover === "right"
      ? "polygon(0 0, 0 0, 0 100%, 0 100%)"
      : "polygon(0 0, 50% 0, 50% 100%, 0 100%)";

  const washClip = hover
    ? "polygon(0 0, 0 0, 0 100%, 0 100%)"
    : "polygon(0 0, 50% 0, 50% 100%, 0 100%)";

  const photoOffset = hover === "left" ? PHOTO_TRAVEL : hover === "right" ? -PHOTO_TRAVEL : 0;

  const developerHidden = hover === "right";
  const designerHidden = hover === "left";

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-split-grid" data-hover={hover ?? undefined}>
            <div
              className="hero-role-col hero-role-left"
              style={{ opacity: developerHidden ? 0 : 1, pointerEvents: developerHidden ? "none" : "auto" }}
              onMouseEnter={() => setHover("left")}
              onMouseLeave={() => setHover(null)}
            >
              <h2 className="role-label">developer</h2>
              <p className="role-desc text-muted-soft">
                I build fast, reliable full-stack applications — from
                database schema to polished UI — using React, TypeScript,
                Next.js, Django and Python.
              </p>
              <AnimatePresence>
                {hover === "left" && (
                  <motion.div
                    className="skill-icon-row"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {devStack.map(({ label, Icon }) => (
                      <span className="skill-icon-card" key={label}>
                        <Icon aria-hidden="true" />
                        <span>{label}</span>
                      </span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="hero-photo-lane"
              onMouseEnter={handleLaneHover}
              onMouseMove={handleLaneHover}
              onMouseLeave={() => setHover(null)}
            >
              <div className="hero-code-bg" aria-hidden="true">
                {codeFragments.map((fragment, i) => (
                  <div
                    key={i}
                    className="code-fragment"
                    style={{
                      top: fragment.top,
                      left: fragment.left,
                      transform: `rotate(${fragment.rotate}deg)`,
                    }}
                  >
                    {fragment.lines.map((line, j) => (
                      <div key={j} className={`code-line tok-${line.tone}`}>
                        {line.text}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="hero-photo-link"
                aria-label="View more about Emmanuel Oluwadare — About page"
                style={{ transform: `translateX(${photoOffset}px)` }}
              >
                <div className="hero-photo-split">
                  <Image
                    src="/images/emmy-hero.jpg"
                    alt="Emmanuel Oluwadare"
                    width={480}
                    height={520}
                    className="photo-base"
                    priority
                  />
                  <motion.div
                    className="photo-grayscale"
                    initial={false}
                    animate={{ clipPath: grayscaleClip }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="photo-wash"
                    initial={false}
                    animate={{ clipPath: washClip }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                  />
                </div>
              </Link>
            </div>

            <div
              className="hero-role-col hero-role-right"
              style={{ opacity: designerHidden ? 0 : 1, pointerEvents: designerHidden ? "none" : "auto" }}
              onMouseEnter={() => setHover("right")}
              onMouseLeave={() => setHover(null)}
            >
              <h2 className="role-label">designer</h2>
              <p className="role-desc text-muted-soft">
                I design clean, accessible interfaces first, then build
                them — so the product looks as good as it works.
              </p>
              <AnimatePresence>
                {hover === "right" && (
                  <motion.div
                    className="skill-icon-row"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {designSkills.map(({ label, Icon }) => (
                      <span className="skill-icon-card" key={label}>
                        <Icon aria-hidden="true" />
                        <span>{label}</span>
                      </span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I&apos;m Emmanuel Oluwadare — a full-stack software developer
            based in Dublin, building sleek, market-ready web applications
            from idea to deployment. I bring a decade of experience as an
            educator into how I work: clear communication, structured
            problem-solving, and a habit of leaving things better documented
            than I found them.
          </motion.p>
        </div>
      </section>

      <div className="section-heading-divider" id="portfolio">
        <span>Some of my latest work</span>
      </div>
    </>
  );
}
