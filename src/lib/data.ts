export const personal = {
  name: "Anurag Singh",
  handle: "oval",
  tagline: "Builder • Engineer",
  email: "oval17.contact@gmail.com",
  location: "India",
  social: {
    github: "https://github.com/Oval17",
    twitter: "https://x.com/Oval170",
    youtube: "https://youtube.com/@ovalcodes",
    instagram: "https://www.instagram.com/oval.codes/",
    email: "mailto:oval17.contact@gmail.com",
  },
};

export const experience = [
  {
    company: "Oval Studio",
    role: "Chief Vibes Officer",
    type: "Vibing",
    period: "Jul 2026 - Present",
    description: "Making new things everyday",
  },
  {
    company: "TELUS Digital AI",
    role: "SDE - 1",
    type: "Hybrid",
    period: "Jul 2026 - Present",
    description:
      "Core member of GTS Frontend Team, working on integrating AI tools and Frontend.",
  },
  {
    company: "GSoC '26",
    role: "Open Source Contributor · Learning Unlimited",
    type: "Remote",
    period: "May 2026 - Aug 2026",
    description:
      "Bootstrapped and overhauled the frontend theming system, improving UI consistency, upgrading the component architecture, and modernising the overall frontend stack.",
  },
  {
    company: "TELUS Digital AI",
    role: "SDE Intern",
    type: "Hybrid",
    period: "Jul 2025 - Jun 2026",
    description:
      "Part of TELUS International's flagship team GTS, worked on the frontend. Shipped 9+ features and resolved 40+ bugs, including P0s, with oncall escalation handling.",
  },
  {
    company: "GSoC '24",
    role: "Open Source Contributor · SugarLabs",
    type: "Remote",
    period: "May 2024 - Aug 2024",
    description:
      "Worked on Sugar, SugarLabs' flagship education platform, porting and improving the experience on Raspberry Pi.",
  },
];

export const education = [
  {
    institution: "BITS Pilani",
    period: "Sept 2021 - May 2026",
    description:
      "Completed Master's in Physics and Bachelor's in Computer Science (Dual Degree).",
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
