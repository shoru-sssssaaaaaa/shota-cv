import type { HighlightVisual as Variant } from "../i18n";

type Props = { variant: Variant };

const svgClass =
  "absolute top-3 right-3 h-7 w-7 text-amber-300/60 transition group-hover:text-amber-500/80 dark:text-amber-700/50 dark:group-hover:text-amber-400/70";

export function HighlightVisual({ variant }: Props) {
  switch (variant) {
    case "bars":
      return (
        <svg className={svgClass} viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <rect x="4" y="22" width="5" height="14" rx="1" fill="currentColor" />
          <rect x="12" y="16" width="5" height="20" rx="1" fill="currentColor" />
          <rect x="20" y="10" width="5" height="26" rx="1" fill="currentColor" />
          <rect x="28" y="4" width="5" height="32" rx="1" fill="currentColor" />
        </svg>
      );
    case "grid":
      return (
        <svg className={svgClass} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
          {[0, 1, 2].flatMap((row) =>
            [0, 1, 2, 3].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={4 + col * 8}
                y={8 + row * 8}
                width="6"
                height="6"
                rx="1"
              />
            )),
          )}
        </svg>
      );
    case "dots":
      return (
        <svg className={svgClass} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M6 20 L14 12 L22 24 L30 10 L36 20" />
          <circle cx="6" cy="20" r="2" fill="currentColor" />
          <circle cx="14" cy="12" r="2" fill="currentColor" />
          <circle cx="22" cy="24" r="2" fill="currentColor" />
          <circle cx="30" cy="10" r="2" fill="currentColor" />
          <circle cx="36" cy="20" r="2" fill="currentColor" />
        </svg>
      );
    case "sparkline":
      return (
        <svg className={svgClass} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 30 L10 24 L16 28 L22 16 L28 18 L36 6" />
        </svg>
      );
    case "arc":
      return (
        <svg className={svgClass} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
          <path d="M6 30 A14 14 0 0 1 34 30" opacity="0.35" />
          <path d="M6 30 A14 14 0 0 1 28 18" />
        </svg>
      );
    case "pulse":
      return (
        <svg className={svgClass} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="20" cy="20" r="4" fill="currentColor" />
          <circle cx="20" cy="20" r="9" opacity="0.5" />
          <circle cx="20" cy="20" r="14" opacity="0.25" />
        </svg>
      );
  }
}
