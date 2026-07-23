import { VIOLET } from "@/lib/constants";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: VIOLET,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 18,
  height: 18,
};

function PointCloudIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="5" r="1.1" fill={VIOLET} stroke="none" />
      <circle cx="6.5" cy="9" r="1.1" fill={VIOLET} stroke="none" />
      <circle cx="17.5" cy="9" r="1.1" fill={VIOLET} stroke="none" />
      <circle cx="4.5" cy="15.5" r="1.1" fill={VIOLET} stroke="none" />
      <circle cx="12" cy="12" r="1.1" fill={VIOLET} stroke="none" />
      <circle cx="19.5" cy="15.5" r="1.1" fill={VIOLET} stroke="none" />
      <circle cx="9" cy="19.5" r="1.1" fill={VIOLET} stroke="none" />
      <circle cx="15" cy="19.5" r="1.1" fill={VIOLET} stroke="none" />
    </svg>
  );
}

function CanvasIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M7.5 15.5 10 10.5l3 4 2-3 2.5 4" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="7" y="7" width="10" height="10" rx="1.3" />
      <path d="M9.5 3.5v3.5M14.5 3.5v3.5M9.5 17v3.5M14.5 17v3.5M3.5 9.5H7M3.5 14.5H7M17 9.5h3.5M17 14.5h3.5" />
      <text x="12" y="13.4" textAnchor="middle" fontSize="6.5" fontWeight="700" fill={VIOLET} stroke="none">
        C
      </text>
    </svg>
  );
}

function ImageStackIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3.3" y="8" width="11.5" height="10.5" rx="1.4" />
      <rect x="9.2" y="4.5" width="11.5" height="10.5" rx="1.4" fill="var(--bg)" />
    </svg>
  );
}

function DiceIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="4" y="4" width="16" height="16" rx="3.5" />
      <circle cx="8.4" cy="8.4" r="1.2" fill={VIOLET} stroke="none" />
      <circle cx="12" cy="12" r="1.2" fill={VIOLET} stroke="none" />
      <circle cx="15.6" cy="15.6" r="1.2" fill={VIOLET} stroke="none" />
    </svg>
  );
}

export const STUDIO_ICONS = {
  "point-cloud": PointCloudIcon,
  canvas: CanvasIcon,
  chip: ChipIcon,
  "image-stack": ImageStackIcon,
  dice: DiceIcon,
};

export type StudioIconKey = keyof typeof STUDIO_ICONS;

export function StudioIcon({ name }: { name: StudioIconKey }) {
  const Icon = STUDIO_ICONS[name];
  return (
    <span
      className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg"
      style={{ background: `${VIOLET}12`, border: `1px solid ${VIOLET}25` }}
    >
      <Icon />
    </span>
  );
}
