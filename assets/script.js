"use strict";

const ANIM_GROUPS = [
  "title-piscine",
  "nodes-piscine",
  "title-cc",
  "bg-rings",
  "rank-0",
  "rank-1",
  "rank-2",
  "rank-3",
  "rank-4",
  "rank-5",
  "rank-6",
  "title-oc",
  "nodes-oc",
];

const ANIM_FADE = 300;
const ANIM_STEP = (5 * 1000) / ANIM_GROUPS.length;

const ANIM_REGISTRY = [];

function registerAnim(el, group) {
  el.style.opacity = "0";
  ANIM_REGISTRY.push({ el, group });
}

function playIntro() {
  for (const { el, group } of ANIM_REGISTRY) {
    const step = ANIM_GROUPS.indexOf(group);
    if (step === -1) continue;
    el.style.animation = `g42FadeIn ${ANIM_FADE}ms ease forwards`;
    el.style.animationDelay = step * ANIM_STEP + "ms";
  }
}

function replayIntro() {
  for (const { el } of ANIM_REGISTRY) {
    el.style.animation = "none";
    el.style.opacity = "0";
  }
  setTimeout(() => playIntro(), 100);
}

const N = "http://www.w3.org/2000/svg";
const svg = document.getElementById("graph");
const tip = document.getElementById("tip");

const D = [
  // ── PISCINE ──
  {
    x: -165,
    y: 0,
    r: 26,
    lines: ["Piscine"],
    fs: 11,
    c: 1,
    lv: "Piscine",
    lbl: "Piscine",
    animGroup: "nodes-piscine",
    desc: "Intensive 4-week bootcamp covering C, algorithms, memory management and Unix fundamentals — the foundation of the 42 curriculum.",
    repo: "https://github.com/Molasz/42Piscine",
  },
  {
    x: -130,
    y: 60,
    r: 26,
    lines: ["Piscine", "Reloaded"],
    fs: 10,
    c: 1,
    lv: "Piscine",
    lbl: "Piscine Reloaded",
    animGroup: "nodes-piscine",
    desc: "Review of the Piscine with additional exercises, focusing on optimization and best practices — essential reinforcement before the projects.",
    repo: "https://github.com/Molasz/42PiscineReloaded",
  },
  {
    x: -95,
    y: 0,
    r: 26,
    lines: ["BSQ"],
    fs: 10,
    c: 1,
    lv: "Piscine",
    lbl: "BSQ",
    animGroup: "nodes-piscine",
    desc: "The classic 'Biggest Square' problem — find the largest square in a grid with obstacles, using dynamic programming and efficient file parsing.",
    repo: "https://github.com/photocatalysta/42-Piscine-BSQ-Project",
  },

  // ── COMMON CORE ──
  {
    x: 320,
    y: 320,
    r: 26,
    lines: ["libft"],
    fs: 11,
    c: 1,
    lv: "Level 0",
    lbl: "libft",
    animGroup: "rank-0",
    desc: "Re-implement the C standard library from scratch — the backbone of every project that follows.",
    repo: "https://github.com/Molasz/42cursus-libft",
  },

  {
    x: 389,
    y: 280,
    r: 26,
    lines: ["ft_printf"],
    fs: 8,
    lv: "Level 1",
    lbl: "ft_printf",
    animGroup: "rank-1",
    desc: "Re-implementation of printf using variadic functions — flags, width, precision and justification.",
    repo: "https://github.com/Molasz/42cursus-ft_printf",
  },
  {
    x: 251,
    y: 360,
    r: 26,
    lines: ["GNL"],
    fs: 9,
    lv: "Level 1",
    lbl: "get_next_line",
    animGroup: "rank-1",
    desc: "Read any file descriptor one line at a time with a configurable BUFFER_SIZE.",
    repo: "https://github.com/Molasz/42cursus-get_next_line",
  },

  {
    x: 455,
    y: 320,
    r: 26,
    lines: ["push_swap"],
    fs: 8,
    lv: "Level 2",
    lbl: "push_swap",
    animGroup: "rank-2",
    desc: "Sort a stack of integers using only two stacks and a minimum number of operations.",
    repo: "https://github.com/Molasz/42cursus-push_swap",
  },
  {
    x: 253,
    y: 437,
    r: 26,
    lines: ["pipex"],
    fs: 11,
    lv: "Level 2",
    lbl: "pipex",
    animGroup: "rank-2",
    desc: "Recreate shell pipes using fork, execve and file descriptor redirection.",
    repo: "https://github.com/Molasz/42cursus-pipex",
  },
  {
    x: 253,
    y: 203,
    r: 26,
    lines: ["FDF"],
    fs: 14,
    lv: "Level 2",
    lbl: "FDF",
    animGroup: "rank-2",
    desc: "3D wireframe terrain renderer — read elevation maps and project them in isometric 3D using MiniLibX.",
    repo: "https://github.com/Molasz/42cursus-fdf",
  },

  {
    x: 501,
    y: 379,
    r: 26,
    lines: ["philosophers"],
    fs: 8,
    lv: "Level 3",
    lbl: "philosophers",
    animGroup: "rank-3",
    desc: "The Dining Philosophers problem — threads, mutexes and deadlock prevention in C.",
    repo: "https://github.com/Molasz/42cursus-philosophers",
  },
  {
    x: 139,
    y: 261,
    r: 26,
    lines: ["minishell"],
    fs: 9,
    lv: "Level 3",
    lbl: "minishell",
    animGroup: "rank-3",
    desc: "A fully functional Unix shell with pipes, redirections, heredocs, variable expansion and all builtins.",
    repo: "https://github.com/Molasz/42cursus-minishell",
  },

  {
    x: 522,
    y: 173,
    r: 26,
    lines: ["cub3D"],
    fs: 11,
    lv: "Level 4",
    lbl: "cub3D",
    animGroup: "rank-4",
    desc: "Raycasting engine inspired by Wolfenstein 3D — DDA algorithm, textures, minimap, built with MLX42.",
    repo: "https://github.com/asiernc/cub3d",
  },
  {
    x: 522,
    y: 467,
    r: 26,
    lines: ["C++", "Modules"],
    fs: 10,
    lv: "Level 4",
    lbl: "C++ Modules",
    animGroup: "rank-4",
    desc: "10 modules covering C++98 OOP: Orthodox Canonical Form, polymorphism, templates, STL and exceptions.",
    repo: "https://github.com/Molasz/42cursus-cpp_modules",
  },
  {
    x: 243,
    y: 558,
    r: 26,
    lines: ["Inception"],
    fs: 8,
    lv: "Level 4",
    lbl: "Inception",
    animGroup: "rank-4",
    desc: "Docker infrastructure from scratch: NGINX + WordPress + MariaDB, persistent volumes, no pre-built images.",
    repo: "https://github.com/Molasz/42cursus-inception",
  },
  {
    x: 70,
    y: 320,
    r: 26,
    lines: ["webserv"],
    fs: 9,
    lv: "Level 4",
    lbl: "webserv",
    animGroup: "rank-4",
    desc: "HTTP/1.1 web server in C++ with config files, virtual hosts, CGI and non-blocking I/O.",
    repo: "https://github.com/DISN-kolo/webserv",
  },

  {
    x: 320,
    y: 600,
    r: 38,
    lines: ["ft_transcendence"],
    fs: 8,
    lv: "Level 5",
    lbl: "ft_transcendence",
    animGroup: "rank-5",
    desc: "Full-stack Pong platform: Django + PostgreSQL + Vanilla JS + Docker. WebSockets, JWT, 2FA, OAuth and 3D rendering.",
    repo: "https://github.com/MartiVallhonrat/ft_transcendence",
  },

  // ── OUTER CORE ──
  {
    x: 740,
    y: 0,
    r: 26,
    lines: ["libasm"],
    fs: 10,
    c: 1,
    lv: "Outer Core",
    lbl: "libasm",
    animGroup: "nodes-oc",
    desc: "Re-implement core C functions in x86-64 assembly — ft_strlen, ft_strcpy, ft_strcmp, ft_write, ft_read, ft_strdup. Learn low-level programming and calling conventions.",
    repo: "https://github.com/Molasz/42outer-libasm",
  },

  {
    x: 810,
    y: 0,
    r: 26,
    lines: ["dr-quine"],
    fs: 10,
    c: 1,
    lv: "Outer Core",
    lbl: "dr-quine",
    animGroup: "nodes-oc",
    desc: "Create self-replicating programs (quines) in C, asm and JS — programs that output their own source code. Explore code generation and self-reference.",
    repo: "https://github.com/Molasz/42outer-dr-quine",
  },

  {
    x: 775,
    y: 60,
    r: 26,
    lines: ["nm"],
    fs: 16,
    c: 1,
    lv: "Outer Core",
    lbl: "nm",
    animGroup: "nodes-oc",
    desc: "Re-implement the nm command — display symbol table of object files. Parse ELF format, handle symbols, types and values.",
    repo: "https://github.com/Molasz/42outer-nm",
  },
];

// ─── ORBIT RINGS ─────────────────────────────────────────────────────────────
const RINGS = [
  { r: 80, lbl: "1" },
  { r: 135, lbl: "2" },
  { r: 190, lbl: "3" },
  { r: 245, lbl: "4" },
  { r: 300, lbl: "5" },
  { r: 345, lbl: "6" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function mk(tag, a = {}) {
  const e = document.createElementNS(N, tag);
  for (const [k, v] of Object.entries(a)) e.setAttribute(k, v);
  return e;
}

function tx(t, a = {}) {
  const e = mk("text", a);
  e.textContent = t;
  return e;
}

// ─── BUILD SVG ───────────────────────────────────────────────────────────────

// Background circles
const bgFill = mk("circle", { cx: 320, cy: 320, r: 345, fill: "#0a1628" });
const bgBorder = mk("circle", {
  cx: 320,
  cy: 320,
  r: 345,
  fill: "none",
  stroke: "#1ae0c8",
  "stroke-width": 0.4,
  opacity: 0.1,
});
registerAnim(bgFill, "bg-rings");
registerAnim(bgBorder, "bg-rings");
svg.append(bgFill, bgBorder);

// Orbit rings + level labels
for (const rg of RINGS) {
  const ring = mk("circle", {
    cx: 320,
    cy: 320,
    r: rg.r,
    fill: "none",
    stroke: "#1ae0c8",
    "stroke-width": 0.7,
    opacity: 0.2,
  });
  const lbl = tx(rg.lbl, {
    x: 320,
    y: 320 + rg.r + 7,
    "text-anchor": "middle",
    "dominant-baseline": "auto",
    fill: "#1ae0c8",
    opacity: 0.35,
    "font-size": 9,
    "font-family": "ui-sans-serif,system-ui,sans-serif",
    "font-weight": "700",
  });
  registerAnim(ring, "bg-rings");
  registerAnim(lbl, "bg-rings");
  svg.append(ring, lbl);
}

// Titles
const textStyle = {
  "text-anchor": "middle",
  fill: "#1ae0c8",
  "font-size": 18,
  "font-family": "ui-sans-serif,system-ui,sans-serif",
  "font-weight": "600",
  "letter-spacing": "2px",
  "text-transform": "uppercase",
  opacity: 0.8,
  y: -40,
  x: 320,
};

const titleCC = tx("Common core", { ...textStyle });
const titlePis = tx("Piscine", { ...textStyle, x: textStyle.x - 450 });
const titleOC = tx("Outer Core", { ...textStyle, x: textStyle.x + 450 });
registerAnim(titlePis, "title-piscine");
registerAnim(titleCC, "title-cc");
registerAnim(titleOC, "title-oc");
svg.append(titleCC, titlePis, titleOC);

// Nodes
for (const p of D) {
  const g = mk("g", { class: "nd" });
  g.append(
    mk("circle", {
      cx: p.x,
      cy: p.y,
      r: p.r,
      fill: "#1ae0c8",
      stroke: p.c ? "#054a3c" : "#077a62",
      "stroke-width": p.c ? 2.5 : 1.8,
    }),
  );
  const nl = p.lines.length,
    lh = p.fs * 1.35,
    y0 = p.y - ((nl - 1) * lh) / 2;
  for (let i = 0; i < nl; i++) {
    g.append(
      tx(p.lines[i], {
        x: p.x,
        y: y0 + i * lh,
        "text-anchor": "middle",
        "dominant-baseline": "central",
        fill: "#051a14",
        "font-size": p.fs,
        "font-family": "ui-sans-serif,system-ui,sans-serif",
        "font-weight": "700",
      }),
    );
  }
  g.addEventListener("mouseenter", (e) => {
    g.querySelector("circle").setAttribute("opacity", ".72");
    tip.innerHTML = `<div class="tn">${p.lbl}</div><div class="tl">${p.lv}</div><div class="td">${p.desc}</div>`;
    tip.style.opacity = "1";
    mv(e);
  });
  g.addEventListener("mousemove", mv);
  g.addEventListener("mouseleave", () => {
    g.querySelector("circle").removeAttribute("opacity");
    tip.style.opacity = "0";
  });
  g.addEventListener("click", () => window.open(p.repo, "_blank"));
  registerAnim(g, p.animGroup);
  svg.append(g);
}

function mv(e) {
  tip.style.left = e.clientX + 16 + "px";
  tip.style.top = e.clientY - 8 + "px";
}

// ─── ZOOM & PAN ──────────────────────────────────────────────────────────────
let scale = 2.7;
const minScale = 0.5;
const maxScale = 3;

const initialVbSize = 640 * scale;
const initialVbX = 320 - initialVbSize / 2;
const initialVbY = 720 - initialVbSize / 2;
svg.setAttribute(
  "viewBox",
  `${initialVbX} ${initialVbY} ${initialVbSize} ${initialVbSize}`,
);

let isDragging = false;
let startX, startY, startVbX, startVbY;

svg.addEventListener("wheel", (e) => {
  e.preventDefault();
  const vb = svg.getAttribute("viewBox").split(" ").map(Number);
  const centerX = vb[0] + vb[2] / 2;
  const centerY = vb[1] + vb[3] / 2;
  const delta = e.deltaY > 0 ? 1.05 : 0.95;
  scale = Math.min(Math.max(scale * delta, minScale), maxScale);
  const s = 640 * scale;
  svg.setAttribute(
    "viewBox",
    `${centerX - s / 2} ${centerY - s / 2} ${s} ${s}`,
  );
});

svg.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  const vb = svg.getAttribute("viewBox").split(" ").map(Number);
  startVbX = vb[0];
  startVbY = vb[1];
  svg.style.cursor = "grabbing";
  e.preventDefault();
});

svg.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const vb = svg.getAttribute("viewBox").split(" ").map(Number);
  const vbSize = vb[2];
  const newVbX = startVbX - (e.clientX - startX) / (window.innerWidth / vbSize);
  const newVbY =
    startVbY - (e.clientY - startY) / (window.innerHeight / vbSize);
  svg.setAttribute("viewBox", `${newVbX} ${newVbY} ${vbSize} ${vbSize}`);
});

svg.addEventListener("mouseup", () => {
  isDragging = false;
  svg.style.cursor = "grab";
});
svg.addEventListener("mouseleave", () => {
  isDragging = false;
  svg.style.cursor = "grab";
});

playIntro();
