"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(201,120,138,0.12)",
  spotlightSize = 350,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gold/10 bg-white transition-all duration-500",
        "hover:border-rose/20 hover:shadow-2xl hover:shadow-wine/[0.06]",
        className
      )}
    >
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
          opacity,
        }}
      />
      {/* Border glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(${spotlightSize * 0.6}px circle at ${position.x}px ${position.y}px, rgba(196,164,107,0.25), transparent 60%)`,
          opacity: opacity * 0.5,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1px",
          borderRadius: "inherit",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
