import { useReducedMotion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Globe,
  Cpu,
  ShieldCheck,
  Layers,
  Bot,
  BrainCircuit,
  Sparkles,
  MessagesSquare,
} from 'lucide-react';

// Network "constellation" drawn in a 1440x800 space and scaled to cover the hero.
const NODES = [
  [120, 140], [310, 90], [260, 300], [480, 210], [620, 80], [760, 260],
  [900, 130], [1060, 230], [1220, 110], [1340, 300], [1180, 420], [980, 520],
  [760, 600], [540, 520], [330, 640], [150, 480], [1320, 640], [1100, 700],
];

const EDGES = [
  [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6], [6, 7],
  [7, 8], [8, 9], [7, 10], [9, 10], [10, 11], [5, 11], [11, 12], [12, 13],
  [13, 3], [13, 14], [14, 15], [15, 2], [10, 16], [16, 17], [17, 11],
];

// Edges that carry a travelling "data packet": [edgeIndex, duration seconds, delay seconds].
const PACKETS = [
  [4, 4, 0], [8, 5, 1.2], [10, 4.5, 0.6], [15, 6, 2], [17, 5, 0.3],
  [19, 4, 1.6], [13, 5.5, 2.4], [22, 4.2, 0.9], [2, 5, 3],
];

// Floating tokens that describe what we build: code, web, mobile, cloud, data, security —
// plus AI tokens (`ai: true`) tinted in the accent colour so they stand out.
const TOKENS = [
  { Icon: Bot, left: '10%', duration: 18, delay: 3, ai: true },
  { text: 'AI', left: '19%', size: 'text-base', duration: 16, delay: 14, ai: true },
  { text: 'agent.run()', left: '28%', size: 'text-xs', duration: 22, delay: 6, ai: true },
  { Icon: BrainCircuit, left: '48%', duration: 19, delay: 0, ai: true },
  { text: 'LLM', left: '57%', size: 'text-sm', duration: 17, delay: 11, ai: true },
  { Icon: Sparkles, left: '64%', duration: 15, delay: 8, ai: true },
  { text: '{ prompt }', left: '79%', size: 'text-xs', duration: 21, delay: 4, ai: true },
  { Icon: MessagesSquare, left: '87%', duration: 18, delay: 17, ai: true },
  { text: 'MCP', left: '93%', size: 'text-sm', duration: 20, delay: 9, ai: true },
  { text: '</>', left: '6%', size: 'text-lg', duration: 16, delay: 0 },
  { Icon: Globe, left: '14%', duration: 19, delay: 5 },
  { text: '{ api }', left: '24%', size: 'text-sm', duration: 21, delay: 9 },
  { Icon: Smartphone, left: '33%', duration: 17, delay: 2 },
  { text: 'git push', left: '44%', size: 'text-xs', duration: 23, delay: 12 },
  { Icon: Database, left: '52%', duration: 18, delay: 7 },
  { text: '=>', left: '60%', size: 'text-lg', duration: 15, delay: 4 },
  { Icon: Cloud, left: '68%', duration: 20, delay: 10 },
  { text: 'npm run build', left: '75%', size: 'text-xs', duration: 22, delay: 1 },
  { Icon: Cpu, left: '83%', duration: 17, delay: 13 },
  { text: '<App />', left: '90%', size: 'text-sm', duration: 19, delay: 6 },
  { Icon: ShieldCheck, left: '96%', duration: 21, delay: 15 },
  { Icon: Code2, left: '38%', duration: 24, delay: 16 },
  { Icon: Layers, left: '3%', duration: 20, delay: 11 },
];

const edgePath = ([a, b]) => `M${NODES[a][0]} ${NODES[a][1]} L${NODES[b][0]} ${NODES[b][1]}`;

// Decorative animated backdrop for the home hero. Purely visual, hidden from assistive tech.
export default function HeroBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Drifting brand-colour glows */}
      <div className="hero-orb absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-primary-500/25 blur-3xl" />
      <div
        className="hero-orb absolute -bottom-40 right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-accent-500/15 blur-3xl"
        style={{ animationDelay: '-9s', animationDuration: '26s' }}
      />
      <div
        className="hero-orb absolute left-1/2 top-1/3 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl"
        style={{ animationDelay: '-4s', animationDuration: '30s' }}
      />

      {/* Blueprint grid, faded towards the edges */}
      <div className="hero-grid absolute inset-0" />

      {/* Connected network with data packets flowing between nodes */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-edge" x1="0" y1="0" x2="1440" y2="800" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2e96ff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#fc9e13" stopOpacity="0.18" />
          </linearGradient>
          {EDGES.map((edge, i) => (
            <path key={i} id={`hero-edge-${i}`} d={edgePath(edge)} />
          ))}
        </defs>

        {EDGES.map((edge, i) => (
          <path key={i} d={edgePath(edge)} stroke="url(#hero-edge)" strokeWidth="1" fill="none" />
        ))}

        {NODES.map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="10"
              fill="#2e96ff"
              className="hero-node-pulse"
              style={{ animationDelay: `${(i % 6) * 0.7}s`, transformOrigin: `${x}px ${y}px` }}
            />
            <circle cx={x} cy={y} r="3" fill={i % 4 === 0 ? '#fdb84a' : '#75baff'} opacity="0.9" />
          </g>
        ))}

        {!reduceMotion &&
          PACKETS.map(([edge, dur, delay], i) => (
            <circle key={i} r="2.5" fill={i % 3 === 0 ? '#fdb84a' : '#b3d9ff'}>
              <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite">
                <mpath href={`#hero-edge-${edge}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur={`${dur}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
      </svg>

      {/* Floating code & service tokens rising through the hero */}
      {!reduceMotion &&
        TOKENS.map(({ text, Icon, left, size = '', duration, delay, ai }, i) => (
          <span
            key={i}
            className={`hero-token absolute bottom-0 font-mono font-semibold ${
              ai ? 'text-accent-400/50' : 'text-primary-200/40'
            } ${size}`}
            // Negative delay starts each token mid-flight so the hero is populated on first paint.
            style={{ left, animationDuration: `${duration}s`, animationDelay: `-${delay}s` }}
          >
            {Icon ? <Icon size={ai ? 22 : 20} strokeWidth={1.5} /> : text}
          </span>
        ))}

      {/* Soft vignette keeps the headline area readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,23,46,0.55),transparent_65%)]" />
    </div>
  );
}
