export const personal = {
  name: "Anurag",
  handle: "oval",
  tagline: "Engineer. I write code (or do I?). 24hrs is never enough.",
  email: "oval17.contact@gmail.com",
  location: "India",
  social: {
    github: "https://github.com/Oval17",
    twitter: "https://x.com/Oval170",
    youtube: "https://youtube.com/@ovalcodes",
    instagram: "https://instagram.com/oval.codess",
    email: "mailto:oval17.contact@gmail.com",
  },
};

export const experience = [
  {
    company: "TELUS Digital AI",
    role: "SDE Intern",
    period: "Jul 2025 — Present",
    description:
      "Building internal tools and AI-powered developer products. Working across the stack — TypeScript, Node.js, and a bunch of Claude.",
  },
  {
    company: "Google Summer of Code",
    role: "Open Source Contributor · SugarLabs",
    period: "May 2024 — Jul 2024",
    description:
      "Contributed to open-source education software as part of GSoC 2024 under SugarLabs.",
  },
];

export const projects = [
  {
    slug: "point-cloud-data-viewer",
    name: "point-cloud-data-viewer",
    tagline: "3D point cloud visualization in the browser.",
    description: `Point cloud data is usually stuck in heavy desktop software. This project brings it to the browser — no installs, no friction.

Built with React, TypeScript, and Three.js. You drag in a point cloud file and it renders interactively in 3D. Supports orbit, zoom, pan. I used worker threads to offload the parsing so the UI stays responsive even on large datasets.

The hardest part was getting the shader-based point rendering to look good at different densities — ended up writing a custom fragment shader to handle variable point sizing based on camera distance.`,
    tags: ["React", "TypeScript", "Three.js", "WebGL"],
    href: "https://github.com/Oval17/point-cloud-data-viewer",
    year: "2024",
  },
  {
    slug: "konva-drawboard",
    name: "konva-drawboard",
    tagline: "A collaborative drawing board for the web.",
    description: `Started this because I wanted to understand how tools like Figma or Excalidraw handle canvas at scale — not the collaborative backend, just the rendering model.

React + Konva.js. Supports shapes, freehand drawing, selection, grouping, and undo/redo. The undo/redo stack was the most interesting part — I used a command pattern so each action is reversible without storing full canvas snapshots.

Canvas manipulation with Konva is genuinely pleasant once you stop fighting it and work with its layer model.`,
    tags: ["React", "Konva.js", "Canvas", "TypeScript"],
    href: "https://github.com/Oval17/konva-drawboard",
    year: "2024",
  },
  {
    slug: "corg-labs",
    name: "Corg-Labs",
    tagline: "C-based tools for image viewing and file compression.",
    description: `I wanted to write something close to the metal. Corg-Labs is a collection of C utilities — an image viewer and a file compressor — built without high-level abstractions.

The image viewer reads raw pixel data and renders it. The compressor implements a basic LZ77-style algorithm. Writing this made me actually appreciate what libc gives you for free.

No dependencies. Just C, a Makefile, and pain.`,
    tags: ["C", "Systems", "CLI", "Compression"],
    href: "https://github.com/Oval17/Corg-Labs",
    year: "2023",
  },
  {
    slug: "stagger-view",
    name: "stagger-view",
    tagline: "Optimized image loading using service workers.",
    description: `Heavy image grids are slow and janky. stagger-view is a small library that uses a service worker to intercept image requests and stagger them — so the browser doesn't choke trying to download 40 images at once.

The service worker maintains a request queue with configurable concurrency. Images load progressively, and the visible ones get priority via an IntersectionObserver signal.

Small footprint, no framework dependencies, drop-in script tag usage.`,
    tags: ["JavaScript", "Service Workers", "Performance", "Browser APIs"],
    href: "https://github.com/Oval17/stagger-view",
    year: "2023",
  },
];

export const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "C",
  "C++",
  "React",
  "Next.js",
  "Node.js",
  "Three.js",
  "Claude AI",
];
