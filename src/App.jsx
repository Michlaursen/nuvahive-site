import React from "react";
import { motion } from "framer-motion";
import logo from "<div className="nuvahive-logo.svg" />
<assets />
<nuvahive-logo></nuvahive-logo>.svg";
import {
  ArrowRight,
  Brain,
  Building2,
  Lock,
  Mic,
  Network,
  ShieldCheck,
  Database,
  MessageSquareText,
  Radar,
  ChevronRight,
} from "lucide-react";
const Button = ({ children, className = "", ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const nav = [
  { label: "Platform", href: "#platform" },
  { label: "Angie", href: "#angie" },
  { label: "NuvaSignal", href: "#nuvasignal" },
  { label: "Architecture", href: "#architecture" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

const platformCards = [
  {
    id: "angie",
    eyebrow: "Knowledge intelligence",
    title: "Angie",
    icon: Brain,
    description:
      "A private knowledge engine that turns enterprise documents, records, and operational content into searchable, structured intelligence.",
    bullets: [
      "Enterprise RAG architecture",
      "Document intelligence and extraction",
      "Structured knowledge retrieval",
      "Internal AI assistants with source-aware answers",
    ],
  },
  {
    id: "nuvasignal",
    eyebrow: "Conversation intelligence",
    title: "NuvaSignal",
    icon: Mic,
    description:
      "A real-time assistant layer for meetings, calls, and live operational conversations, built to surface insight when it matters most.",
    bullets: [
      "Live meeting assistance",
      "Sales and call intelligence",
      "Decision support in real time",
      "Multilingual capture and guidance",
    ],
  },
];

const useCases = [
  {
    title: "Enterprise Knowledge",
    text: "Transform scattered documents into usable intelligence teams can actually work with.",
    icon: Database,
  },
  {
    title: "Sales Intelligence",
    text: "Give teams better context before, during, and after important customer conversations.",
    icon: MessageSquareText,
  },
  {
    title: "Executive Decision Support",
    text: "Bring operational signals, documentation, and conversations into one intelligence layer.",
    icon: Radar,
  },
  {
    title: "Private AI Operations",
    text: "Deploy AI where security, governance, and infrastructure control actually matter.",
    icon: ShieldCheck,
  },
];

const architecture = [
  {
    title: "Inputs",
    items: ["Documents", "Meetings", "Internal systems", "Operational records"],
  },
  {
    title: "NuvaHive intelligence layer",
    items: ["Angie", "NuvaSignal", "Secure orchestration", "Retrieval and reasoning"],
  },
  {
    title: "Outputs",
    items: ["AI assistants", "Actionable insights", "Automation triggers", "Team intelligence"],
  },
];

const securityPoints = [
  "Private infrastructure options",
  "On-premise or private cloud deployment",
  "No forced dependency on public AI APIs",
  "Controlled data boundaries and governance",
  "Enterprise-ready architecture and reproducibility",
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="NuvaHive"
        className="h-9 w-9 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
      />

      <div className="flex flex-col leading-[1.05]">
        <span className="text-[1.34rem] font-semibold tracking-[-0.03em] text-white">
          NuvaHive
        </span>
        <span className="text-[0.68rem] font-medium tracking-[0.34em] text-slate-400">
          AI PLATFORM
        </span>
      </div>
    </div>
  );
}

function GridGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 animate-grid-drift bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-[-10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute left-[-10%] top-[-20%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute bottom-[-15%] right-[-5%] h-[26rem] w-[26rem] rounded-full bg-blue-600/20 blur-3xl" />
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M70 500 C 220 390, 280 390, 410 450 S 650 570, 770 470 S 950 280, 1130 330"
          stroke="rgba(56,189,248,0.65)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 18"
          animate={{ strokeDashoffset: [0, -48] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
        d="M110 240 C 260 300, 360 120, 520 180 S 780 340, 930 260 S 1030 160, 1150 200"
        stroke="rgba(96,165,250,0.6)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 12"
        animate={{ strokeDashoffset: [0, -40] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
        <motion.circle
          cx="70"
          cy="500"
          r="6"
          fill="rgba(34,211,238,0.95)"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.circle
          cx="410"
          cy="450"
          r="6"
          fill="rgba(34,211,238,0.95)"
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />

        <motion.circle
          cx="770"
          cy="470"
          r="6"
          fill="rgba(34,211,238,0.95)"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.circle
          cx="1130"
          cy="330"
          r="6"
          fill="rgba(34,211,238,0.95)"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="110" cy="240" r="6" fill="rgba(59,130,246,0.85)" />
        <circle cx="520" cy="180" r="6" fill="rgba(59,130,246,0.85)" />
        <circle cx="930" cy="260" r="6" fill="rgba(59,130,246,0.85)" />
      </svg>
    </div>
  );
}

function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.15)" />
            <stop offset="50%" stopColor="rgba(34,211,238,0.7)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
          </linearGradient>

          <linearGradient id="lineB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.1)" />
            <stop offset="50%" stopColor="rgba(96,165,250,0.65)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0.2)" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M90 220 C 250 110, 380 130, 540 230 S 860 350, 1010 250 S 1220 120, 1360 180"
          stroke="url(#lineA)"
          strokeWidth="3"
          fill="none"
          filter="url(#softGlow)"
          initial={{ pathLength: 0.2, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        <motion.path
          d="M60 470 C 220 370, 360 360, 520 470 S 810 630, 980 520 S 1210 330, 1380 410"
          stroke="url(#lineB)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#softGlow)"
          initial={{ pathLength: 0.2, opacity: 0.15 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.15 }}
        />

        <motion.path
          d="M180 760 C 350 650, 500 690, 650 760 S 930 860, 1130 730"
          stroke="url(#lineA)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#softGlow)"
          initial={{ pathLength: 0.15, opacity: 0.1 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 2.8, ease: "easeInOut", delay: 0.25 }}
        />

        {[
          { cx: 90, cy: 220, r: 7 },
          { cx: 540, cy: 230, r: 7 },
          { cx: 1010, cy: 250, r: 7 },
          { cx: 1360, cy: 180, r: 7 },
          { cx: 60, cy: 470, r: 6 },
          { cx: 520, cy: 470, r: 6 },
          { cx: 980, cy: 520, r: 6 },
          { cx: 1380, cy: 410, r: 6 },
          { cx: 180, cy: 760, r: 6 },
          { cx: 650, cy: 760, r: 6 },
          { cx: 1130, cy: 730, r: 6 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={i % 2 === 0 ? "rgba(34,211,238,0.95)" : "rgba(96,165,250,0.95)"}
            filter="url(#softGlow)"
            initial={{ scale: 0.7, opacity: 0.35 }}
            animate={{ scale: [1, 1.22, 1], opacity: [0.45, 1, 0.45] }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.12,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}

function GlobalNeuralBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">

      {/* drifting grid */}
      <div className="absolute inset-0 animate-grid-drift bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* large ambient glow */}
      <div className="absolute left-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[220px]" />

      <div className="absolute right-[15%] top-[60%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[220px]" />

    </div>
  )
}

export default function NuvaHiveHomepage() {
  return (
    <div className="relative min-h-screen bg-[#07111f] text-white">

      <GlobalNeuralBackground />

      <div className="relative isolate overflow-hidden">
        <GridGlow />
        <NeuralBackground />

        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111f]/75 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="#" className="flex items-center gap-3">
              <LogoMark />
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="text-[0.95rem] font-medium text-slate-300 transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>

            <Button className="rounded-full bg-cyan-400 px-7 text-[0.98rem] font-semibold text-slate-950 hover:bg-cyan-300">
              Request Demo
            </Button>
          </div>
        </header>

        <section className="relative mx-auto grid items-start max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-32 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10 lg:-mt-8"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 px-4 py-1.5 text-[0.92rem] font-medium text-slate-300 backdrop-blur">
              <Network className="h-4 w-4 text-cyan-300" />
              Private AI infrastructure for real organizations
            </div>

            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Operational Intelligence Platform
            </div>

            <h1 className="max-w-[10ch] text-5xl font-semibold tracking-[-0.05em] text-white md:text-[5.25rem] md:leading-[1.05]">
              <span className="block text-slate-300">Operational</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                AI infrastructure
              </span>
              <span className="block text-white">for real organizations.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300 md:text-[1.28rem] md:leading-9">
              NuvaHive connects enterprise knowledge, conversations, and operational systems into a private intelligence layer powering decisions, automation, and AI assistants.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full bg-cyan-400 px-7 text-[0.98rem] font-semibold text-slate-950 hover:bg-cyan-300">
                Explore Platform <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/15 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 px-7 text-[0.98rem] font-medium text-white hover:bg-white/10">
                Contact Enterprise Sales
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Private AI", "Deploy with control"],
                ["RAG + Retrieval", "Source-aware intelligence"],
                ["Conversation Intelligence", "Insight inside conversations"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-colors duration-300 p-4 backdrop-blur-sm">
                  <div className="text-sm font-medium text-white">{title}</div>
                  <div className="mt-1 text-sm text-slate-400">{text}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative z-10"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,21,39,0.95),rgba(8,15,27,0.96))] p-6 shadow-2xl shadow-cyan-950/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_100%_20%,rgba(59,130,246,0.22),transparent_30%)]" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 px-4 py-3">
                  <div>
                    <div className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-slate-400">Platform</div>
                    <div className="mt-1 text-lg font-medium">NuvaHive Intelligence Layer</div>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Enterprise
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {platformCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 p-5">
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2">
                            <Icon className="h-5 w-5 text-cyan-300" />
                          </div>
                          <div>
                            <div className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-slate-400">{card.eyebrow}</div>
                            <div className="text-[1.7rem] font-semibold tracking-[-0.03em]">{card.title}</div>
                          </div>
                        </div>
                        <div className="mt-4 space-y-3">
                          {card.bullets.slice(0, 3).map((bullet) => (
                            <div key={bullet} className="flex items-start gap-2 text-sm text-slate-300">
                              <ChevronRight className="mt-0.5 h-4 w-4 text-cyan-300" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="relative py-2">
                  <div className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 hidden -translate-y-1/2 md:block">
                    <motion.div
                      className="h-px w-full bg-gradient-to-r from-cyan-400/10 via-cyan-400/60 to-cyan-400/10"
                      animate={{ opacity: [0.35, 0.8, 0.35] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,1)]"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  <div className="relative z-10 grid gap-4 md:grid-cols-3">
                    {architecture.map((block) => (
                      <div key={block.title} className="rounded-3xl border border-white/10 bg-[#0b172a]/85 p-5">
                        <div className="text-sm font-medium text-cyan-300">{block.title}</div>
                        <div className="mt-4 space-y-2">
                          {block.items.map((item) => (
                            <div
                              key={item}
                              className="rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.08]"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <main>
        <section className="bg-[#08111d] border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
                How NuvaHive works
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl md:leading-[1.02]">
                One intelligence layer across your operations.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-[1.15rem] md:leading-9">
                NuvaHive connects enterprise knowledge, conversations, and operational systems into one intelligence layer for retrieval, context, and action.
              </p>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Documents",
                  "Meetings",
                  "Internal systems",
                  "Operations",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 px-5 py-6 text-base font-medium text-slate-200 backdrop-blur-sm hover:border-cyan-400/30"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <div className="hidden h-24 w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent lg:block" />
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.18)] lg:hidden">
                  ↓
                </div>
              </div>

              <div className="rounded-[2rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(14,26,45,0.96),rgba(8,15,27,0.98))] p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                <div className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300">
                  NuvaHive intelligence layer
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 p-5">
                    <div className="text-sm uppercase tracking-[0.22em] text-slate-400">
                      Knowledge intelligence
                    </div>
                    <div className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                      Angie
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Ingests, structures, retrieves, and reasons over enterprise knowledge.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 p-5">
                    <div className="text-sm uppercase tracking-[0.22em] text-slate-400">
                      Conversation intelligence
                    </div>
                    <div className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                      NuvaSignal
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Understands meetings and conversations in real time and feeds insight back into the system.
                    </p>
                  </div>
                </div>

                <div className="my-8 flex items-center justify-center">
                  <div className="h-12 w-px bg-gradient-to-b from-cyan-400/70 to-transparent" />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    "AI assistants",
                    "Operational automation",
                    "Decision support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-[#0a1526]/85 px-4 py-4 text-center text-sm font-medium text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#08111d] border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
                  Deploy anywhere. Maintain control.
                </div>

                <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl md:leading-[1.02]">
                  NuvaHive runs where your data lives.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-[1.12rem] md:leading-9">
                  Deploy NuvaHive in environments built for privacy, governance, and operational control. From private cloud to on-prem infrastructure, the platform runs where your data already lives.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Private cloud",
                    text: "Deploy in isolated cloud environments with enterprise-grade control and network boundaries.",
                  },
                  {
                    title: "On-premise",
                    text: "Run close to sensitive systems and data sources inside your own infrastructure footprint.",
                  },
                  {
                    title: "Hybrid deployment",
                    text: "Connect cloud services, internal systems, and local intelligence layers without breaking architecture.",
                  },
                  {
                    title: "Controlled environments",
                    text: "Support operations where governance, reproducibility, and controlled access are not optional.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] px-6 py-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
                  >
                    <div className="text-lg font-semibold tracking-[-0.02em] text-white">
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(14,26,45,0.85),rgba(8,15,27,0.92))] px-6 py-6 shadow-[0_0_32px_rgba(34,211,238,0.08)]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                    Private AI posture
                  </div>
                  <div className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">
                    Built for enterprise ownership, not shared-model guesswork.
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Private deployment", "Governed access", "Controlled data flow"].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-16">
            <SectionHeading
              eyebrow="The platform"
              title="One platform for operational intelligence"
              description="NuvaHive combines Angie’s knowledge intelligence with NuvaSignal’s conversation intelligence into one operational intelligence platform."
            />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {platformCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  id={card.id}
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 text-white backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                          <Icon className="h-6 w-6 text-cyan-300" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.22em] text-slate-400">{card.eyebrow}</div>
                          <h3 className="mt-1 text-3xl font-semibold">{card.title}</h3>
                        </div>
                      </div>

                      <p className="mt-10 text-base leading-7 text-slate-300">{card.description}</p>

                      <div className="mt-10 grid gap-3">
                        {card.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#0a1526]/80 px-4 py-3 text-sm text-slate-300">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="relative bg-[#08111d] border-b border-white/10">
          <div className="pointer-events-none absolute right-[10%] top-[28%] z-0 h-[420px] w-[420px] rounded-full bg-cyan-400/22 blur-[160px] animate-breathe-glow" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">

              <div>
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
                  Angie: the operational knowledge engine
                </div>

                <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl md:leading-[1.02]">
                  How Angie turns knowledge into intelligence.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-[1.15rem] md:leading-9">
                  Angie transforms enterprise documents and operational knowledge into a structured intelligence layer designed for retrieval, context, and reasoning.
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    title: "Document ingestion",
                    text: "Ingest contracts, reports, and operational files into a structured knowledge pipeline."
                  },
                  {
                    title: "Semantic indexing",
                    text: "Create vectorized knowledge structures optimized for retrieval and contextual reasoning."
                  },
                  {
                    title: "Context retrieval",
                    text: "Retrieve the right information at the right moment across large knowledge bases."
                  },
                  {
                    title: "Reasoning layer",
                    text: "Combine retrieved context with AI reasoning to generate precise operational insight."
                  }
                ].map((item) => (

                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] px-6 py-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center gap-3 text-lg font-semibold tracking-[-0.02em] text-white">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                    {item.title}
                  </div>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>

                ))}

              </div>

            </div>

            <div className="mt-16 rounded-[2rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(14,26,45,0.85),rgba(8,15,27,0.92))] p-8 shadow-[0_0_32px_rgba(34,211,238,0.08)]">

              <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
                Angie intelligence engine
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">

                {[
                  "Knowledge ingestion",
                  "Structured intelligence",
                  "Enterprise RAG"
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-[#0a1526]/85 px-5 py-4 text-sm font-medium text-white"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            <div className="mt-10 text-xs uppercase tracking-[0.25em] text-cyan-300">
              Angie pipeline
            </div>

            <div className="relative mt-10">
              <div className="pointer-events-none absolute left-[6%] right-[6%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent lg:block" />

              <div className="relative grid gap-8 lg:grid-cols-4">

                {[
                  {
                    step: "01",
                    title: "Ingest",
                    text: "Collect documents, operational records, and institutional knowledge from across the organization.",
                  },
                  {
                    step: "02",
                    title: "Structure",
                    text: "Transform raw information into indexed, contextualized knowledge that can be searched and related.",
                  },
                  {
                    step: "03",
                    title: "Retrieve",
                    text: "Find relevant operational context quickly using semantic retrieval and knowledge-aware search.",
                  },
                  {
                    step: "04",
                    title: "Reason",
                    text: "Generate grounded answers, insights, and support actions using retrieved organizational context.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                        {item.step}
                      </div>

                      <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                    </div>

                    <div className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>
            </div>

          </div>

        </section>

        <section className="relative border-b border-white/10 bg-[#08111d]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

              <div>
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
                  The NuvaHive intelligence piepline
                </div>

                <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                  Conversation <span className="text-cyan-300">intelligence</span> in real time.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-[1.15rem] md:leading-9">
                  NuvaSignal listens to meetings, calls, and operational conversations, transforming spoken information into structured intelligence inside the NuvaHive platform.
                </p>

              </div>

              <div className="relative flex items-center justify-center">

                <div className="absolute h-[320px] w-[320px] rounded-full bg-blue-500/15 blur-[160px]" />

                <div className="rounded-3xl border border-white/10 bg-[#0a1526]/80 px-8 py-8 text-slate-300 backdrop-blur">

                  <div className="text-sm text-slate-400">Example</div>

                  <div className="mt-3 text-white">
                    “Summarize the key risks mentioned in this meeting.”
                  </div>

                  <div className="mt-4 text-sm text-slate-400">
                    NuvaSignal detects discussion topics, extracts insights,
                    and feeds them into Angie’s knowledge layer.
                  </div>

                </div>

              </div>

            </div>

            <div className="mt-20 grid gap-10 lg:grid-cols-3 lg:items-center">

              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-6">
                  <div className="text-sm uppercase tracking-[0.22em] text-slate-400">
                    Knowledge intelligence
                  </div>

                  <div className="mt-2 text-2xl font-semibold text-white">
                    Angie
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Ingests documents, operational knowledge, and institutional memory
                    into a structured intelligence layer.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center">

                  {/* animated signal line left */}
                  <motion.div
                    className="absolute left-[-140px] top-1/2 h-[2px] w-[120px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ x: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* animated signal line right */}
                  <motion.div
                    className="absolute right-[-140px] top-1/2 h-[2px] w-[120px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ x: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* core pulse ring */}
                  <div className="absolute h-full w-full rounded-full border border-cyan-400/20 animate-ping" />

                  <div className="absolute h-28 w-28 rounded-full border border-cyan-400/30" />

                  {/* intelligence core */}
                  <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-cyan-300 to-sky-400 shadow-[0_0_40px_rgba(34,211,238,0.7)] ring-1 ring-cyan-300/30 animate-pulse">
                    <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400/30" />

                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-6">
                  <div className="text-sm uppercase tracking-[0.22em] text-slate-400">
                    Conversation intelligence
                  </div>

                  <div className="mt-2 text-2xl font-semibold text-white">
                    NuvaSignal
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Interprets conversations, meetings, and live interactions,
                    feeding insights back into the intelligence layer.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-3">

              {[
                "Operational assistants",
                "Automated workflows",
                "Decision support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#0a1526]/85 px-5 py-4 text-center text-sm font-medium text-white"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>
        </section>

        <section className="relative border-b border-white/10 bg-[#07111f]">
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">

            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
                Ask Angie
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                Ask questions across your organization’s knowledge.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-[1.15rem] md:leading-9">
                Angie retrieves knowledge across documents, operations, and conversations to deliver precise answers grounded in your organization's data.
              </p>
            </div>

            <div className="mt-16 rounded-3xl border border-white/10 bg-[#0a1526]/80 p-8 backdrop-blur">

              <div className="text-sm text-slate-400">Example query</div>

              <div className="mt-4 rounded-xl bg-[#07111f] px-5 py-4 text-white border border-white/10">
                What were the main safety risks identified in the last operational review?
              </div>

              <div className="mt-6 text-sm text-slate-400">Angie response</div>

              <div className="mt-4 rounded-xl bg-[#07111f] px-5 py-4 border border-cyan-400/20 text-slate-200">
                The review identified three key risks: incomplete maintenance documentation,
                delayed equipment inspection schedules, and inconsistent safety reporting
                across operational teams.
              </div>

            </div>

          </div>
        </section>

        <section className="relative border-b border-white/10 bg-[#07111f]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
                Use cases
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl md:leading-[1.02]">
                Where operational intelligence creates impact.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-[1.15rem] md:leading-9">
                NuvaHive turns organizational knowledge, conversations, and operational signals into usable intelligence across teams.
              </p>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  title: "Operations intelligence",
                  text: "Access institutional knowledge across documents, processes, and operational systems.",
                },
                {
                  title: "Meeting intelligence",
                  text: "Extract insights and decisions from meetings and operational conversations.",
                },
                {
                  title: "Risk and compliance",
                  text: "Surface safety risks, compliance gaps, and operational inconsistencies.",
                },
                {
                  title: "Knowledge management",
                  text: "Turn fragmented institutional knowledge into structured intelligence.",
                },
                {
                  title: "Decision support",
                  text: "Provide leadership with contextual insights grounded in real operational data.",
                },
                {
                  title: "Automation enablement",
                  text: "Power assistants, workflows, and AI-driven operational automation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-3 text-white">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                    <div className="text-lg font-semibold tracking-[-0.02em]">
                      {item.title}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        <section id="architecture" className="border-y border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1),transparent_50%),#08111d]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <SectionHeading
              eyebrow="Built like infrastructure"
              title="Designed for reliability, scalability, and enterprise control."
              description="NuvaHive is designed as an intelligence layer between enterprise inputs and operational outputs. It can ingest, structure, retrieve, reason, and assist without forcing teams into a fragile patchwork of disconnected AI tools."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 p-8">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Building2 className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.22em]">Enterprise flow</span>
                </div>
                <div className="mt-8 space-y-6">
                  {architecture.map((block, idx) => (
                    <div key={block.title} className="relative rounded-3xl border border-white/10 bg-[#0a1526]/80 p-5">
                      <div className="text-lg font-medium text-white">{block.title}</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {block.items.map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 px-3 py-1 text-sm text-slate-300">
                            {item}
                          </span>
                        ))}
                      </div>
                      {idx < architecture.length - 1 ? (
                        <div className="pointer-events-none absolute left-1/2 top-full h-8 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/60 to-transparent" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {useCases.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Enterprise security and governance"
              title="AI without handing away the keys"
              description="Enterprise AI only becomes useful when security teams and operators can trust the system underneath it. NuvaHive is built for ownership, control, and deployment flexibility."
            />

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 p-8">
              <div className="flex items-center gap-3 text-cyan-300">
                <Lock className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.22em]">Private AI posture</span>
              </div>
              <div className="mt-6 grid gap-3">
                {securityPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0a1526]/80 px-4 py-4">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span className="text-sm leading-6 text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <p className="text-lg text-slate-400 md:text-xl">
            Designed for organizations that require 
            <span className="text-white font-medium"> private, controlled AI infrastructure </span>
            with full ownership of their operational knowledge.
          </p>

        </div>

        <div className="mx-auto max-w-4xl px-6 py-12 text-center"></div>

        <section className="border-y border-white/10 bg-[#091423]">
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(20,33,56,0.94),rgba(9,20,35,0.98))] p-8 shadow-[0_0_60px_rgba(34,211,238,0.08)]">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">Pricing</div>
                <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white">Enterprise</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  NuvaHive is offered as an enterprise platform with private deployment options, tailored integrations, and a solution architecture aligned to your environment.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Angie knowledge system",
                    "NuvaSignal assistant layer",
                    "Enterprise integrations",
                    "Private deployment options",
                    "Security and governance alignment",
                    "Dedicated support",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 px-4 py-3 text-sm text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div id="contact" className="rounded-[2rem] border border-white/10 bg-white/[0.06] hover:bg-white/[0.08] transition-colors duration-300 p-8">
                <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Contact</div>
                <h3 className="mt-4 text-3xl font-semibold text-white">Build the intelligence layer for your organization</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Let’s talk about the systems you want to understand better, automate safely, and turn into operational intelligence.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0a1526]/80 px-4 py-3 text-sm text-slate-300">Enterprise demos</div>
                  <div className="rounded-2xl border border-white/10 bg-[#0a1526]/80 px-4 py-3 text-sm text-slate-300">Platform discovery calls</div>
                  <div className="rounded-2xl border border-white/10 bg-[#0a1526]/80 px-4 py-3 text-sm text-slate-300">Architecture and deployment discussions</div>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-7 text-[0.98rem] font-semibold text-slate-950 hover:brightness-110 transition">
                    Request Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border border-white/15 bg-white/[0.06] px-6 text-white hover:border-cyan-400/30 hover:bg-white/[0.08] transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div>
            <div className="font-medium text-white">NuvaHive</div>
            <div>Private AI infrastructure for enterprise intelligence</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a href="#platform" className="transition hover:text-white">Platform</a>
          <a href="#architecture" className="transition hover:text-white">Architecture</a>
          <a href="#security" className="transition hover:text-white">Security</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </footer>
    </div>
  );
}
