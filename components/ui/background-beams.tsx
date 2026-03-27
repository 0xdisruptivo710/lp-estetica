"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function BackgroundBeams({ className }: { className?: string }) {
  const beams = [
    { x1: "10%", x2: "35%", delay: 0, duration: 7 },
    { x1: "25%", x2: "55%", delay: 1, duration: 9 },
    { x1: "45%", x2: "70%", delay: 2, duration: 8 },
    { x1: "60%", x2: "85%", delay: 0.5, duration: 10 },
    { x1: "75%", x2: "95%", delay: 3, duration: 7.5 },
    { x1: "5%", x2: "20%", delay: 1.5, duration: 11 },
    { x1: "85%", x2: "60%", delay: 2.5, duration: 8.5 },
  ];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="beam-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="rgba(201,120,138,0.06)" />
            <stop offset="60%" stopColor="rgba(196,164,107,0.04)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {beams.map((beam, i) => (
          <motion.line
            key={i}
            x1={beam.x1} y1="0%"
            x2={beam.x2} y2="100%"
            stroke="url(#beam-grad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
