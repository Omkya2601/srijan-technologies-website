import { Lightbulb, PenTool, Cpu, TrendingUp } from 'lucide-react';

const NODES = [
  { Icon: Lightbulb, label: 'Idea', x: 40, y: 210 },
  { Icon: PenTool, label: 'Creation', x: 130, y: 150 },
  { Icon: Cpu, label: 'Technology', x: 220, y: 90 },
  { Icon: TrendingUp, label: 'Growth', x: 310, y: 35 },
];

// A custom, on-brand illustration of the Idea -> Creation -> Technology -> Growth
// journey, used in place of generic floating-card hero graphics.
export default function HeroIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 -28 360 298"
      className={className}
      role="img"
      aria-label="Illustration showing the journey from idea to creation, technology and growth"
    >
      <defs>
        <linearGradient id="journey-line" x1="40" y1="210" x2="310" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2e96ff" />
          <stop offset="100%" stopColor="#fc9e13" />
        </linearGradient>
      </defs>

      <path
        d="M40 210 C 90 190, 90 170, 130 150 C 170 130, 180 110, 220 90 C 250 75, 280 55, 310 35"
        stroke="url(#journey-line)"
        strokeWidth="3"
        strokeDasharray="2 10"
        strokeLinecap="round"
        fill="none"
        className="journey-path"
      />

      {NODES.map(({ Icon, label, x, y }, i) => (
        <g key={label} transform={`translate(${x}, ${y})`}>
          <circle r="26" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
          <foreignObject x="-11" y="-11" width="22" height="22">
            <div className="flex h-full w-full items-center justify-center text-accent-300">
              <Icon size={18} strokeWidth={2} />
            </div>
          </foreignObject>
          <text
            x="0"
            y={i % 2 === 0 ? 44 : -38}
            textAnchor="middle"
            className="fill-white/80"
            fontSize="12"
            fontWeight="600"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}
