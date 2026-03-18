"use strict";

const N = "http://www.w3.org/2000/svg";
const svg = document.getElementById("graph");
const tip = document.getElementById("tip");

const D = [
  {
    x: 10,
    y: 0,
    r: 26,
    lines: ["Piscine"],
    fs: 11,
    c: 1,
    lv: 0,
    lbl: "Piscine",
    desc: "Intensive 4-week bootcamp covering C, algorithms, memory management and Unix fundamentals — the foundation of the 42 curriculum.",
    repo: "https://github.com/Molasz/42cursus-libft",
  },

  {
    x: 90,
    y: 0,
    r: 26,
    lines: ["Piscine", "Reloaded"],
    fs: 10,
    c: 1,
    lv: 0,
    lbl: "Piscine Reloaded",
    desc: "Review of the Piscine with additional exercises, focusing on optimization and best practices — essential reinforcement before the projects.",
    repo: "https://github.com/Molasz/42cursus-libft",
  },

  {
    x: 320,
    y: 320,
    r: 26,
    lines: ["libft"],
    fs: 11,
    c: 1,
    lv: 0,
    lbl: "libft",
    desc: "Re-implement the C standard library from scratch — the backbone of every project that follows.",
    repo: "https://github.com/Molasz/42cursus-libft",
  },

  {
    x: 389,
    y: 280,
    r: 26,
    lines: ["ft_printf"],
    fs: 8,
    lv: 1,
    lbl: "ft_printf",
    desc: "Re-implementation of printf using variadic functions — flags, width, precision and justification.",
    repo: "https://github.com/Molasz/42cursus-ft_printf",
  },
  {
    x: 251,
    y: 360,
    r: 26,
    lines: ["GNL"],
    fs: 9,
    lv: 1,
    lbl: "get_next_line",
    desc: "Read any file descriptor one line at a time with a configurable BUFFER_SIZE.",
    repo: "https://github.com/Molasz/42cursus-get_next_line",
  },

  {
    x: 455,
    y: 320,
    r: 26,
    lines: ["push_swap"],
    fs: 8,
    lv: 2,
    lbl: "push_swap",
    desc: "Sort a stack of integers using only two stacks and a minimum number of operations.",
    repo: "https://github.com/Molasz/42cursus-push_swap",
  },
  {
    x: 253,
    y: 437,
    r: 26,
    lines: ["pipex"],
    fs: 11,
    lv: 2,
    lbl: "pipex",
    desc: "Recreate shell pipes using fork, execve and file descriptor redirection.",
    repo: "https://github.com/Molasz/42cursus-pipex",
  },
  {
    x: 253,
    y: 203,
    r: 26,
    lines: ["FDF"],
    fs: 14,
    lv: 2,
    lbl: "FDF",
    desc: "3D wireframe terrain renderer — read elevation maps and project them in isometric 3D using MiniLibX.",
    repo: "https://github.com/Molasz/42cursus-fdf",
  },

  {
    x: 501,
    y: 379,
    r: 26,
    lines: ["philosophers"],
    fs: 8,
    lv: 3,
    lbl: "philosophers",
    desc: "The Dining Philosophers problem — threads, mutexes and deadlock prevention in C.",
    repo: "https://github.com/Molasz/42cursus-philosophers",
  },
  {
    x: 139,
    y: 261,
    r: 26,
    lines: ["minishell"],
    fs: 9,
    lv: 3,
    lbl: "minishell",
    desc: "A fully functional Unix shell with pipes, redirections, heredocs, variable expansion and all builtins.",
    repo: "https://github.com/Molasz/42cursus-minishell",
  },

  {
    x: 243,
    y: 82,
    r: 26,
    lines: ["net", "practice"],
    fs: 9,
    lv: 4,
    lbl: "NetPractice",
    desc: "Network configuration exercises covering subnetting, routing tables and IP addressing.",
    repo: "https://github.com/Molasz",
  },
  {
    x: 522,
    y: 173,
    r: 26,
    lines: ["cub3D"],
    fs: 11,
    lv: 4,
    lbl: "cub3D",
    desc: "Raycasting engine inspired by Wolfenstein 3D — DDA algorithm, textures, minimap, built with MLX42.",
    repo: "https://github.com/Molasz/42cursus-cub3D",
  },
  {
    x: 522,
    y: 467,
    r: 26,
    lines: ["C++", "Modules"],
    fs: 10,
    lv: 4,
    lbl: "C++ Modules",
    desc: "10 modules covering C++98 OOP: Orthodox Canonical Form, polymorphism, templates, STL and exceptions.",
    repo: "https://github.com/Molasz/42cursus-cpp",
  },
  {
    x: 243,
    y: 558,
    r: 26,
    lines: ["Inception"],
    fs: 8,
    lv: 4,
    lbl: "Inception",
    desc: "Docker infrastructure from scratch: NGINX + WordPress + MariaDB, persistent volumes, no pre-built images.",
    repo: "https://github.com/Molasz/42cursus-inception",
  },
  {
    x: 70,
    y: 320,
    r: 26,
    lines: ["webserv"],
    fs: 9,
    lv: 4,
    lbl: "webserv",
    desc: "HTTP/1.1 web server in C++ with config files, virtual hosts, CGI and non-blocking I/O.",
    repo: "https://github.com/Molasz",
  },

  {
    x: 320,
    y: 600,
    r: 26,
    lines: ["ft_transcendence"],
    fs: 6,
    lv: 5,
    lbl: "ft_transcendence",
    desc: "Full-stack Pong platform: Django + PostgreSQL + Vanilla JS + Docker. WebSockets, JWT, 2FA, OAuth and 3D rendering.",
    repo: "https://github.com/Molasz/42cursus-ft_transcendence",
  },
];

const RINGS = [
  { r: 80, lbl: "1" },
  { r: 135, lbl: "2" },
  { r: 190, lbl: "3" },
  { r: 250, lbl: "4" },
  { r: 290, lbl: "5" },
];

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

// Background circles
svg.append(mk("circle", { cx: 320, cy: 320, r: 310, fill: "#0a1628" }));
svg.append(
  mk("circle", {
    cx: 320,
    cy: 320,
    r: 310,
    fill: "none",
    stroke: "#1ae0c8",
    "stroke-width": 0.4,
    opacity: 0.1,
  }),
);

// Orbit rings + level labels
for (const rg of RINGS) {
  svg.append(
    mk("circle", {
      cx: 320,
      cy: 320,
      r: rg.r,
      fill: "none",
      stroke: "#1ae0c8",
      "stroke-width": 0.7,
      opacity: 0.2,
    }),
  );
  svg.append(
    tx(rg.lbl, {
      x: 320,
      y: 320 - rg.r - 7,
      "text-anchor": "middle",
      "dominant-baseline": "auto",
      fill: "#1ae0c8",
      opacity: 0.35,
      "font-size": 9,
      "font-family": "ui-sans-serif,system-ui,sans-serif",
      "font-weight": "700",
    }),
  );
}

// Titles
svg.append(
  tx("Common core", {
    x: 320,
    y: 0,
    "text-anchor": "middle",
    fill: "#1ae0c8",
    "font-size": 18,
    "font-family": "ui-sans-serif,system-ui,sans-serif",
    "font-weight": "600",
    "letter-spacing": "2px",
    "text-transform": "uppercase",
    opacity: 0.8,
  }),
);
svg.append(
  tx("Piscine", {
    x: 50,
    y: -40,
    "text-anchor": "middle",
    fill: "#1ae0c8",
    "font-size": 14,
    "font-family": "ui-sans-serif,system-ui,sans-serif",
    "font-weight": "600",
    "letter-spacing": "2px",
    "text-transform": "uppercase",
    opacity: 0.8,
  }),
);

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
    tip.innerHTML = `<div class="tn">${p.lbl}</div><div class="tl">Level ${p.lv}</div><div class="td">${p.desc}</div>`;
    tip.style.opacity = "1";
    mv(e);
  });
  g.addEventListener("mousemove", mv);
  g.addEventListener("mouseleave", () => {
    g.querySelector("circle").removeAttribute("opacity");
    tip.style.opacity = "0";
  });
  g.addEventListener("click", () => window.open(p.repo, "_blank"));
  svg.append(g);
}
function mv(e) {
  const r = document.getElementById("graph").getBoundingClientRect();
  tip.style.left = e.clientX + 16 + "px";
  tip.style.top = e.clientY - 8 + "px";
}

// Zoom and pan variables
let scale = 1.9;
const minScale = 0.5;
const maxScale = 3;

const initialVbSize = 640 * scale;
const initialVbX = 320 - initialVbSize / 2;
const initialVbY = 420 - initialVbSize / 2;
svg.setAttribute(
  "viewBox",
  `${initialVbX} ${initialVbY} ${initialVbSize} ${initialVbSize}`,
);

let isDragging = false;
let startX, startY;
let startVbX, startVbY;

// Zoom event
svg.addEventListener("wheel", (e) => {
  e.preventDefault();
  const vb = svg.getAttribute("viewBox").split(" ").map(Number);
  const vbX = vb[0],
    vbY = vb[1],
    vbW = vb[2],
    vbH = vb[3];

  const currentCenterX = vbX + vbW / 2;
  const currentCenterY = vbY + vbH / 2;

  const delta = e.deltaY > 0 ? 1.05 : 0.95;
  scale *= delta;
  scale = Math.min(Math.max(scale, minScale), maxScale);
  const newVbW = 640 * scale;
  const newVbH = 640 * scale;
  const newVbX = currentCenterX - newVbW / 2;
  const newVbY = currentCenterY - newVbH / 2;
  svg.setAttribute("viewBox", `${newVbX} ${newVbY} ${newVbW} ${newVbH}`);
});

// Pan events
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
  const pixelsPerUnitX = window.innerWidth / vbSize;
  const pixelsPerUnitY = window.innerHeight / vbSize;
  const deltaX = (e.clientX - startX) / pixelsPerUnitX;
  const deltaY = (e.clientY - startY) / pixelsPerUnitY;
  const newVbX = startVbX - deltaX;
  const newVbY = startVbY - deltaY;
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
