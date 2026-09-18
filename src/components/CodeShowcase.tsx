"use client";

import { motion } from "framer-motion";

// Each token gets a type so the Sass file below can color it. This
// mirrors how a real syntax highlighter works, just written by hand
// for one small, fixed snippet instead of pulling in a whole library.
type Token = {
  text: string;
  type?: "keyword" | "type" | "property" | "string" | "boolean";
};

const codeLines: Token[][] = [
  [
    { text: "const ", type: "keyword" },
    { text: "developer" },
    { text: ": " },
    { text: "Engineer", type: "type" },
    { text: " = {" },
  ],
  [
    { text: "  name", type: "property" },
    { text: ": " },
    { text: '"Emmanuel Oluwadare"', type: "string" },
    { text: "," },
  ],
  [
    { text: "  aka", type: "property" },
    { text: ": " },
    { text: '"Emmy"', type: "string" },
    { text: "," },
  ],
  [
    { text: "  role", type: "property" },
    { text: ": " },
    { text: '"Full-Stack Software Developer"', type: "string" },
    { text: "," },
  ],
  [
    { text: "  stack", type: "property" },
    { text: ": [" },
    { text: '"Django"', type: "string" },
    { text: ", " },
    { text: '"Python"', type: "string" },
    { text: ", " },
    { text: '"Next.js"', type: "string" },
    { text: ", " },
    { text: '"C#"', type: "string" },
    { text: ", " },
    { text: '"TypeScript"', type: "string" },
    { text: ", " },
    { text: '"React"', type: "string" },
    { text: ", " },
    { text: '"JavaScript"', type: "string" },
    { text: "]," },
  ],
  [
    { text: "  basedIn", type: "property" },
    { text: ": " },
    { text: '"Dublin, Ireland"', type: "string" },
    { text: "," },
  ],
  [
    { text: "  openToWork", type: "property" },
    { text: ": " },
    { text: "true", type: "boolean" },
    { text: "," },
  ],
  [{ text: "};" }],
];

// The macOS-style code window. whileInView means it animates in when
// it scrolls into view rather than the instant the page loads, which
// gives the page a second, separate reveal moment after the hero.
export default function CodeShowcase() {
  return (
    <section className="code-showcase-section">
      <motion.div
        className="code-window"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="code-window-titlebar">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="code-window-title">Code&amp;Emmy</span>
        </div>
        <pre className="code-window-body">
          <code>
            {codeLines.map((line, i) => (
              <div className="code-line" key={i}>
                {line.map((token, j) => (
                  <span key={j} className={token.type ? `tok-${token.type}` : undefined}>
                    {token.text}
                  </span>
                ))}
              </div>
            ))}
          </code>
        </pre>
      </motion.div>
    </section>
  );
}
