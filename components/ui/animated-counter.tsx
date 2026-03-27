"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  countDown?: boolean;
}

export function AnimatedCounter({
  target, from = 0, prefix = "", suffix = "",
  duration = 2400, className, countDown = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(countDown ? from : 0);

  useEffect(() => {
    if (!isInView) return;
    const t0 = performance.now();
    const startVal = countDown ? from : 0;
    const endVal = target;

    function tick(now: number) {
      const p = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      if (countDown) {
        setValue(Math.round(startVal * (1 - ease)));
      } else {
        setValue(Math.round(endVal * ease));
      }
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, target, from, duration, countDown]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  );
}
