"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { personal } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-medium tracking-widest uppercase text-[#555] mb-8">
            about
          </p>
          <div className="space-y-4 text-[#888] text-base leading-relaxed">
            <p>
              I'm Anurag — an engineer who likes building things that work well
              and look clean. Right now I'm interning at{" "}
              <span className="text-[#c8c8c8]">TELUS Digital AI</span>, where I
              work on developer tooling and AI-powered products.
            </p>
            <p>
              Before that, I spent a summer with{" "}
              <span className="text-[#c8c8c8]">Google Summer of Code 2024</span>{" "}
              contributing to open-source education software through SugarLabs.
            </p>
            <p>
              I like working close to the metal sometimes (see: C projects) and
              other times building interactive UIs with Three.js or Canvas. The
              common thread is curiosity.
            </p>
            <p>
              Outside of code — YouTube{" "}
              <a
                href={personal.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8c8c8] hover:text-[#e8e8e8] transition-colors underline underline-offset-2 decoration-[#333]"
              >
                @ovalcodes
              </a>{" "}
              when I have something to share.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
