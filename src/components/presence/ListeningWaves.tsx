import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/** Ethereal acoustic lines that emanate horizontally from the Presence while listening. */
export function ListeningWaves({ level, className }: { level: number; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const levelRef = useRef(level);
  levelRef.current = level;

  useEffect(() => {
    let raf = 0;
    const paths = ref.current ? Array.from(ref.current.querySelectorAll("path")) : [];
    const draw = (t: number) => {
      const lvl = 0.18 + levelRef.current * 0.9;
      paths.forEach((p, i) => {
        const side = i % 2 === 0 ? -1 : 1;
        const layer = Math.floor(i / 2);
        const amp = (6 + layer * 4) * lvl;
        const freq = 0.018 + layer * 0.006;
        const phase = t / (420 - layer * 80) + layer;
        let d = "";
        for (let x = 0; x <= 400; x += 8) {
          const fade = Math.sin((x / 400) * Math.PI) ** 1.4;
          const y = 50 + Math.sin(x * freq + phase * side) * amp * fade;
          const px = side < 0 ? 400 - x : x;
          d += `${x === 0 ? "M" : "L"}${(side < 0 ? px - 400 : px + 0).toFixed(1)} ${y.toFixed(2)} `;
        }
        p.setAttribute("d", d);
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="-400 0 800 100"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="lw-l" x1="1" x2="0">
          <stop offset="0" stopColor="oklch(0.85 0.08 255)" stopOpacity="0.9" />
          <stop offset="1" stopColor="oklch(0.66 0.17 262)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lw-r" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(0.85 0.08 255)" stopOpacity="0.9" />
          <stop offset="1" stopColor="oklch(0.66 0.17 300)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2].flatMap((layer) =>
        [0, 1].map((side) => (
          <path
            key={`${layer}-${side}`}
            fill="none"
            stroke={side === 0 ? "url(#lw-l)" : "url(#lw-r)"}
            strokeWidth={layer === 0 ? 1.4 : 0.8}
            opacity={1 - layer * 0.28}
            vectorEffect="non-scaling-stroke"
          />
        )),
      )}
    </svg>
  );
}
