'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function Counter({ end, duration = 2, suffix = '', prefix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * end;
        setCount(current);

        if (now >= endTime) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}
