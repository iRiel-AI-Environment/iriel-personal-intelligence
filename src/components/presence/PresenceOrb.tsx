import { useId, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useSettings } from "@/lib/store/settings";

export type PresenceState = "idle" | "listening" | "thinking" | "responding";

interface Props {
  state?: PresenceState;
  /** 0..1 microphone level while listening */
  level?: number;
  className?: string;
  /** Shared-element name for the hero → header morph */
  transitionName?: string;
  label?: string;
}

/**
 * The Presence: an iridescent glass capsule with a chromatic light beam inside.
 * Drawn in SVG so every state can animate without images.
 */
export function PresenceOrb({ state = "idle", level = 0, className, transitionName, label = "iRiel" }: Props) {
  const raw = useId().replace(/:/g, "");
  const id = (s: string) => `${raw}-${s}`;
  const motion = useSettings((s) => s.motion);
  const glow = useSettings((s) => s.glow);
  const fast = state === "thinking";
  const dur = fast ? "2.2s" : state === "listening" ? "3s" : "7s";

  const waveA = [
    "M24 104 C 90 112, 140 84, 196 92 S 300 104, 336 98",
    "M24 100 C 96 90, 150 108, 204 98 S 296 86, 336 96",
    "M24 106 C 84 98, 136 92, 190 100 S 306 108, 336 100",
    "M24 104 C 90 112, 140 84, 196 92 S 300 104, 336 98",
  ].join(";");
  const waveB = [
    "M40 98 C 110 100, 160 90, 210 95 S 290 99, 322 96",
    "M40 96 C 104 106, 170 94, 214 97 S 286 92, 322 98",
    "M40 100 C 116 94, 156 100, 206 93 S 294 101, 322 97",
    "M40 98 C 110 100, 160 90, 210 95 S 290 99, 322 96",
  ].join(";");

  return (
    <div
      role="img"
      aria-label={label}
      data-state={state}
      data-motion={motion}
      className={cn("presence-orb select-none", className)}
      style={
        {
          "--orb-level": level.toFixed(3),
          opacity: 0.55 + (glow / 100) * 0.45,
          viewTransitionName: transitionName,
        } as CSSProperties
      }
    >
      <svg viewBox="0 0 360 190" className="block h-full w-full overflow-visible" aria-hidden>
        <defs>
          <linearGradient id={id("body")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="oklch(0.16 0.004 270)" />
            <stop offset="0.45" stopColor="oklch(0.05 0.002 270)" />
            <stop offset="0.62" stopColor="oklch(0.03 0 0)" />
            <stop offset="1" stopColor="oklch(0.3 0.005 260)" />
          </linearGradient>
          <radialGradient id={id("floor")} cx="0.5" cy="1" r="0.75">
            <stop offset="0" stopColor="oklch(0.92 0.01 70)" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="oklch(0.7 0.02 260)" stopOpacity="0.12" />
            <stop offset="1" stopColor="oklch(0 0 0)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={id("rim")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="oklch(1 0 0)" stopOpacity="0.55" />
            <stop offset="0.35" stopColor="oklch(0.85 0.04 260)" stopOpacity="0.14" />
            <stop offset="0.7" stopColor="oklch(1 0 0)" stopOpacity="0.25" />
            <stop offset="1" stopColor="oklch(1 0 0)" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id={id("rimSide")} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="oklch(0.85 0.08 50)" stopOpacity="0.6" />
            <stop offset="0.2" stopColor="oklch(1 0 0)" stopOpacity="0" />
            <stop offset="0.8" stopColor="oklch(1 0 0)" stopOpacity="0" />
            <stop offset="1" stopColor="oklch(0.78 0.12 255)" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id={id("beam")} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="oklch(0.66 0.17 262)" stopOpacity="0" />
            <stop offset="0.18" stopColor="oklch(0.62 0.2 262)" stopOpacity="0.85" />
            <stop offset="0.38" stopColor="oklch(0.66 0.19 295)" />
            <stop offset="0.5" stopColor="oklch(0.84 0.1 40)" />
            <stop offset="0.58" stopColor="oklch(0.99 0.02 80)" />
            <stop offset="0.7" stopColor="oklch(0.8 0.1 250)" />
            <stop offset="0.86" stopColor="oklch(0.7 0.14 262)" stopOpacity="0.5" />
            <stop offset="1" stopColor="oklch(0.66 0.17 262)" stopOpacity="0" />
          </linearGradient>
          <filter id={id("blur8")} x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id={id("blur3")} x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="2.6" />
          </filter>
          <filter id={id("blur14")} x="-30%" y="-60%" width="160%" height="220%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <clipPath id={id("clip")}>
            <rect x="10" y="10" width="340" height="170" rx="85" />
          </clipPath>
        </defs>

        {/* glass body */}
        <rect x="10" y="10" width="340" height="170" rx="85" fill={`url(#${id("body")})`} />
        <g clipPath={`url(#${id("clip")})`}>
          <ellipse cx="180" cy="190" rx="170" ry="70" fill={`url(#${id("floor")})`} />
          {/* top specular */}
          <ellipse cx="150" cy="22" rx="110" ry="10" fill="oklch(1 0 0)" opacity="0.07" filter={`url(#${id("blur8")})`} />
          {/* chromatic beam */}
          <g className="orb-beam">
            <path d="M24 104 C 90 112, 140 84, 196 92 S 300 104, 336 98" stroke={`url(#${id("beam")})`} strokeWidth="26" fill="none" opacity="0.45" filter={`url(#${id("blur14")})`}>
              <animate attributeName="d" dur={dur} repeatCount="indefinite" values={waveA} />
            </path>
            <path d="M24 104 C 90 112, 140 84, 196 92 S 300 104, 336 98" stroke={`url(#${id("beam")})`} strokeWidth="7" fill="none" opacity="0.9" filter={`url(#${id("blur3")})`}>
              <animate attributeName="d" dur={dur} repeatCount="indefinite" values={waveA} />
            </path>
            <path d="M40 98 C 110 100, 160 90, 210 95 S 290 99, 322 96" stroke={`url(#${id("beam")})`} strokeWidth="1.6" fill="none" opacity="0.95">
              <animate attributeName="d" dur={dur} repeatCount="indefinite" values={waveB} />
            </path>
            <ellipse cx="205" cy="96" rx="40" ry="5" fill="oklch(1 0.01 80)" opacity="0.85" filter={`url(#${id("blur3")})`} />
          </g>
          {/* shadow under beam */}
          <rect x="10" y="108" width="340" height="24" fill="oklch(0 0 0)" opacity="0.35" filter={`url(#${id("blur8")})`} />
        </g>
        {/* rims */}
        <rect x="10" y="10" width="340" height="170" rx="85" fill="none" stroke={`url(#${id("rim")})`} strokeWidth="4" opacity="0.5" filter={`url(#${id("blur3")})`} />
        <rect x="10.75" y="10.75" width="338.5" height="168.5" rx="84.25" fill="none" stroke={`url(#${id("rim")})`} strokeWidth="1.5" />
        <rect x="10.75" y="10.75" width="338.5" height="168.5" rx="84.25" fill="none" stroke={`url(#${id("rimSide")})`} strokeWidth="1.5" />
      </svg>
    </div>
  );
}
