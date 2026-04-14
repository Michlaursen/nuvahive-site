import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./assets/nuvahive-logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Privacy from "./Privacy.jsx";
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
    <div className="flex items-center gap-2.5 sm:gap-3">
      <img
        src={logo}
        alt="NuvaHive"
        className="h-8 w-8 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)] sm:h-9 sm:w-9"
      />

      <div className="flex flex-col leading-[1.02]">
        <span className="text-[1.1rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.34rem]">
          NuvaHive
        </span>
        <span className="text-[0.58rem] font-medium tracking-[0.28em] text-slate-400 sm:text-[0.68rem] sm:tracking-[0.34em]">
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

function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <div className="mb-3 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:mb-4 sm:text-xs sm:tracking-[0.24em]">
        {eyebrow}
      </div>
      <h2 className="max-w-[11ch] text-[2.3rem] font-semibold leading-[0.98] tracking-tight text-white sm:max-w-3xl sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-slate-300 sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-8 md:text-lg">
          {description}
        </p>
      ) : null}
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

function NuvaHiveHomepage() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  company: "",
  interest: "",
  message: "",
  website: "",
});

const [submitting, setSubmitting] = useState(false);
const [status, setStatus] = useState("");

function handleChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
}

async function handleSubmit(e) {
  e.preventDefault();
  setSubmitting(true);
  setStatus("");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    setStatus("Thanks. Angie received your request and will get back to you shortly.");
    setForm({
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
      website: "",
    });
  } catch (err) {
    setStatus(err.message || "Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
}
  return (
    <div className="relative min-h-screen bg-[#07111f] text-white">

      <GlobalNeuralBackground />

      <div className="relative isolate overflow-hidden">
        <GridGlow />
        <NeuralBackground />

        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111f]/75 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4 lg:px-8">
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
            <a href="#contact">
              <Button className="rounded-full bg-cyan-400 px-4 text-[0.9rem] font-semibold text-slate-950 hover:bg-cyan-300 sm:px-5 sm:text-[0.95rem] md:px-7 md:text-[0.98rem]">
                Request Demo
              </Button>
            </a>
          </div>
        </header>

        <section className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 pb-16 pt-14 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 lg:pb-32 lg:pt-24">
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

            <h1 className="max-w-[11ch] text-[2.6rem] font-semibold leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl md:max-w-[10ch] md:text-[5.25rem] md:leading-[1.05]">
              <span className="block text-slate-300">Operational</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                AI infrastructure
              </span>
              <span className="block text-white">for real organizations.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[0.98rem] leading-7 text-slate-300 sm:mt-7 sm:text-base sm:leading-8 md:mt-8 md:max-w-3xl md:text-[1.28rem] md:leading-9">
              NuvaHive connects enterprise knowledge, conversations, and operational systems into a private intelligence layer powering decisions, automation, and AI assistants.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a href="#platform" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full bg-cyan-400 px-6 text-[0.95rem] font-semibold text-slate-950 hover:bg-cyan-300 sm:w-auto sm:px-7 sm:text-[0.98rem]">
                  Explore Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full rounded-full border-white/15 bg-white/[0.06] px-6 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto sm:px-7 sm:text-[0.98rem]">
                  Contact Enterprise Sales
                </Button>
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
              {[
                ["Private AI", "Deploy with control"],
                ["RAG + Retrieval", "Source-aware intelligence"],
                ["Conversation Intelligence", "Insight inside conversations"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.08] hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] sm:rounded-3xl sm:p-4"
                >
                  <div className="text-[0.92rem] font-medium leading-5 text-white sm:text-sm">{title}</div>
                  <div className="mt-1 text-[0.88rem] leading-5 text-slate-400 sm:text-sm">{text}</div>
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
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,21,39,0.95),rgba(8,15,27,0.96))] p-4 shadow-2xl shadow-cyan-950/30 sm:rounded-[2rem] sm:p-5 md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_100%_20%,rgba(59,130,246,0.22),transparent_30%)]" />
              <div className="relative space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-3 transition-colors duration-300 hover:bg-white/[0.08] sm:px-4">
                  <div className="min-w-0">
                    <div className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-slate-400 sm:text-[0.72rem] sm:tracking-[0.28em]">Platform</div>
                    <div className="mt-1 text-base font-medium sm:text-lg">NuvaHive Intelligence Layer</div>
                  </div>
                  <div className="ml-3 shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[0.7rem] text-emerald-300 sm:px-3 sm:text-xs">
                    Enterprise
                  </div>
                </div>

                <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                  {platformCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 transition-colors duration-300 hover:bg-white/[0.08] sm:rounded-3xl sm:p-5">
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2">
                            <Icon className="h-5 w-5 text-cyan-300" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-slate-400 sm:text-[0.72rem] sm:tracking-[0.28em]">{card.eyebrow}</div>
                            <div className="text-[1.3rem] font-semibold tracking-[-0.03em] sm:text-[1.7rem]">{card.title}</div>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2.5 sm:space-y-3">
                          {card.bullets.slice(0, 3).map((bullet) => (
                            <div key={bullet} className="flex items-start gap-2 text-[0.92rem] text-slate-300 sm:text-sm">
                              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="relative py-1 sm:py-2">
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

                  <div className="relative z-10 grid gap-3 sm:gap-4 md:grid-cols-3">
                    {architecture.map((block) => (
                      <div key={block.title} className="rounded-[1.5rem] border border-white/10 bg-[#0b172a]/85 p-4 sm:rounded-3xl sm:p-5">
                        <div className="text-sm font-medium text-cyan-300">{block.title}</div>
                        <div className="mt-3 space-y-2 sm:mt-4">
                          {block.items.map((item) => (
                            <div
                              key={item}
                              className="rounded-xl px-3 py-2 text-[0.92rem] text-slate-300 transition hover:bg-white/[0.08] sm:text-sm"
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
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:mb-4 sm:text-xs sm:tracking-[0.24em]">
                How NuvaHive works
              </div>

              <h2 className="max-w-[11ch] text-[2.3rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:max-w-3xl sm:text-4xl md:text-6xl md:leading-[1.02]">
                One intelligence layer across your operations.
              </h2>

              <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-slate-300 sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-8 md:text-[1.15rem] md:leading-9">
                NuvaHive connects enterprise knowledge, conversations, and operational systems into one intelligence layer for retrieval, context, and action.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:mt-16 sm:gap-8 lg:mt-20 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-4">
                {[
                  "Documents",
                  "Meetings",
                  "Internal systems",
                  "Operations",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] px-4 py-4.5 text-[0.95rem] font-medium text-slate-200 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08] sm:rounded-3xl sm:px-5 sm:py-6 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <div className="hidden h-24 w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent lg:block" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-sm text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.18)] lg:hidden">
                  ↓
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(14,26,45,0.96),rgba(8,15,27,0.98))] p-5 shadow-[0_0_40px_rgba(34,211,238,0.08)] sm:rounded-[2rem] sm:p-6 md:p-8">
                <div className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:text-xs sm:tracking-[0.28em]">
                  NuvaHive intelligence layer
                </div>

                <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 transition-colors duration-300 hover:bg-white/[0.08] sm:rounded-3xl sm:p-5">
                    <div className="text-[0.78rem] uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.22em]">
                      Knowledge intelligence
                    </div>
                    <div className="mt-2 text-[1.55rem] font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                      Angie
                    </div>
                    <p className="mt-3 text-[0.92rem] leading-6 text-slate-300 sm:text-sm sm:leading-7">
                      Ingests, structures, retrieves, and reasons over enterprise knowledge.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 transition-colors duration-300 hover:bg-white/[0.08] sm:rounded-3xl sm:p-5">
                    <div className="text-[0.78rem] uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.22em]">
                      Conversation intelligence
                    </div>
                    <div className="mt-2 text-[1.55rem] font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                      NuvaSignal
                    </div>
                    <p className="mt-3 text-[0.92rem] leading-6 text-slate-300 sm:text-sm sm:leading-7">
                      Understands meetings and conversations in real time and feeds insight back into the system.
                    </p>
                  </div>
                </div>

                <div className="my-5 flex items-center justify-center sm:my-8">
                  <div className="h-8 w-px bg-gradient-to-b from-cyan-400/70 to-transparent sm:h-12" />
                </div>

                <div className="grid gap-2.5 sm:gap-4 sm:grid-cols-3">
                  {[
                    "AI assistants",
                    "Operational automation",
                    "Decision support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.1rem] border border-white/10 bg-[#0a1526]/85 px-3.5 py-3 text-center text-[0.88rem] font-medium leading-5 text-white sm:rounded-2xl sm:px-4 sm:py-4 sm:text-sm"
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
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
              <div>
                <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:mb-4 sm:text-xs sm:tracking-[0.24em]">
                  Deploy anywhere. Maintain control.
                </div>

                <h2 className="max-w-[11ch] text-[2.3rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:max-w-2xl sm:text-4xl md:text-6xl md:leading-[1.02]">
                  NuvaHive runs where your data lives.
                </h2>

                <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-[1.12rem] md:leading-9">
                  Deploy NuvaHive in environments built for privacy, governance, and operational control. From private cloud to on-prem infrastructure, the platform runs where your data already lives.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
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
                    className="rounded-[1.45rem] border border-white/10 bg-white/[0.05] px-5 py-5 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08] sm:rounded-[1.75rem] sm:px-6 sm:py-6"
                  >
                    <div className="text-[1.05rem] font-semibold tracking-[-0.02em] text-white sm:text-lg">
                      {item.title}
                    </div>
                    <p className="mt-3 text-[0.92rem] leading-6 text-slate-300 sm:text-sm sm:leading-7">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(14,26,45,0.85),rgba(8,15,27,0.92))] px-5 py-5 shadow-[0_0_32px_rgba(34,211,238,0.08)] sm:mt-12 sm:rounded-[2rem] sm:px-6 sm:py-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:text-sm sm:tracking-[0.24em]">
                    Private AI posture
                  </div>
                  <div className="mt-2 max-w-xl text-[1.1rem] font-semibold leading-7 tracking-[-0.03em] text-white sm:text-xl">
                    Built for enterprise ownership, not shared-model guesswork.
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {["Private deployment", "Governed access", "Controlled data flow"].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[0.88rem] font-medium text-slate-200 sm:px-4 sm:text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-12 sm:mb-14 md:mb-16">
            <SectionHeading
              eyebrow="The platform"
              title="One platform for operational intelligence"
              description="NuvaHive combines Angie’s knowledge intelligence with NuvaSignal’s conversation intelligence into one operational intelligence platform."
            />
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2 lg:gap-6">
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
                  <Card className="h-full rounded-[1.6rem] border-white/10 bg-white/[0.06] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.08] sm:rounded-[2rem]">
                    <CardContent className="p-5 sm:p-6 md:p-8">
                      <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2.5 sm:p-3">
                          <Icon className="h-5 w-5 text-cyan-300 sm:h-6 sm:w-6" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[0.68rem] uppercase tracking-[0.18em] text-slate-400 sm:text-xs sm:tracking-[0.22em]">{card.eyebrow}</div>
                          <h3 className="mt-1 text-[1.55rem] font-semibold leading-tight sm:text-3xl">{card.title}</h3>
                        </div>
                      </div>

                      <p className="mt-6 text-[0.98rem] leading-7 text-slate-300 sm:mt-8 sm:text-base md:mt-10">{card.description}</p>

                      <div className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3 md:mt-10">
                        {card.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3 rounded-[1rem] border border-white/8 bg-[#0a1526]/80 px-3.5 py-3 text-[0.92rem] text-slate-300 sm:rounded-2xl sm:px-4 sm:text-sm">
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
          <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">

              <div>
                <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:mb-4 sm:text-xs sm:tracking-[0.24em]">
                  Angie: the operational knowledge engine
                </div>

                <h2 className="max-w-[11ch] text-[2.3rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:max-w-2xl sm:text-4xl md:text-6xl md:leading-[1.02]">
                  How Angie turns knowledge into intelligence.
                </h2>

                <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-[1.15rem] md:leading-9">
                  Angie transforms enterprise documents and operational knowledge into a structured intelligence layer designed for retrieval, context, and reasoning.
                </p>

              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">

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
                    className="rounded-[1.45rem] border border-white/10 bg-white/[0.05] px-5 py-5 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08] sm:rounded-[1.75rem] sm:px-6 sm:py-6"
                  >
                    <div className="flex items-start gap-3 text-[1.05rem] font-semibold tracking-[-0.02em] text-white sm:items-center sm:text-lg">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] sm:mt-0" />
                      <span>{item.title}</span>
                    </div>

                    <p className="mt-3 text-[0.92rem] leading-6 text-slate-300 sm:text-sm sm:leading-7">
                      {item.text}
                    </p>
                  </div>

                ))}

              </div>

            </div>

            <div className="mt-12 rounded-[1.75rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(14,26,45,0.85),rgba(8,15,27,0.92))] p-5 shadow-[0_0_32px_rgba(34,211,238,0.08)] sm:mt-16 sm:rounded-[2rem] sm:p-6 md:p-8">

              <div className="text-[0.68rem] uppercase tracking-[0.22em] text-cyan-300 sm:text-xs sm:tracking-[0.28em]">
                Angie intelligence engine
              </div>

              <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-3">

                {[
                  "Knowledge ingestion",
                  "Structured intelligence",
                  "Enterprise RAG"
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-[1.1rem] border border-white/10 bg-[#0a1526]/85 px-4 py-3 text-[0.9rem] font-medium text-white sm:rounded-2xl sm:px-5 sm:py-4 sm:text-sm"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            <div className="mt-8 text-[0.68rem] uppercase tracking-[0.22em] text-cyan-300 sm:mt-10 sm:text-xs sm:tracking-[0.25em]">
              Angie pipeline
            </div>

            <div className="relative mt-8 sm:mt-10">
              <div className="pointer-events-none absolute left-[6%] right-[6%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent lg:block" />

              <div className="relative grid gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-8">

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
                ].map((item) => (
                  <div
                    key={item.step}
                    className="relative rounded-[1.45rem] border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08] sm:rounded-[1.75rem] sm:p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:text-sm sm:tracking-[0.24em]">
                        {item.step}
                      </div>

                      <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                    </div>

                    <div className="mt-4 text-[1.5rem] font-semibold tracking-[-0.03em] text-white sm:mt-5 sm:text-2xl">
                      {item.title}
                    </div>

                    <p className="mt-3 text-[0.92rem] leading-6 text-slate-300 sm:mt-4 sm:text-sm sm:leading-7">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>
            </div>

          </div>

        </section>

        <section className="relative border-b border-white/10 bg-[#08111d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">

            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">

              <div>
                <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:mb-4 sm:text-xs sm:tracking-[0.24em]">
                  The NuvaHive intelligence pipeline
                </div>

                <h2 className="max-w-[11ch] text-[2.3rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:max-w-2xl sm:text-4xl md:text-6xl">
                  Conversation <span className="text-cyan-300">intelligence</span> in real time.
                </h2>

                <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-[1.15rem] md:leading-9">
                  NuvaSignal listens to meetings, calls, and operational conversations, transforming spoken information into structured intelligence inside the NuvaHive platform.
                </p>

              </div>

              <div className="relative flex items-center justify-center">

                <div className="absolute h-[240px] w-[240px] rounded-full bg-blue-500/15 blur-[120px] sm:h-[280px] sm:w-[280px] sm:blur-[140px] md:h-[320px] md:w-[320px] md:blur-[160px]" />

                <div className="rounded-[1.6rem] border border-white/10 bg-[#0a1526]/80 px-5 py-5 text-slate-300 backdrop-blur sm:rounded-3xl sm:px-6 sm:py-6 md:px-8 md:py-8">

                  <div className="text-[0.85rem] text-slate-400 sm:text-sm">Example</div>

                  <div className="mt-3 text-[1.05rem] leading-7 text-white sm:text-[1.12rem]">
                    “Summarize the key risks mentioned in this meeting.”
                  </div>

                  <div className="mt-4 text-[0.92rem] leading-6 text-slate-400 sm:text-sm sm:leading-7">
                    NuvaSignal detects discussion topics, extracts insights,
                    and feeds them into Angie’s knowledge layer.
                  </div>

                </div>

              </div>

            </div>

            <div className="mt-14 grid gap-6 sm:mt-16 sm:gap-8 lg:mt-20 lg:grid-cols-3 lg:items-center lg:gap-10">

              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] px-5 py-5 sm:rounded-3xl sm:px-6 sm:py-6">
                  <div className="text-[0.78rem] uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.22em]">
                    Knowledge intelligence
                  </div>

                  <div className="mt-2 text-[1.55rem] font-semibold text-white sm:text-2xl">
                    Angie
                  </div>

                  <p className="mt-3 text-[0.92rem] leading-6 text-slate-300 sm:text-sm sm:leading-7">
                    Ingests documents, operational knowledge, and institutional memory
                    into a structured intelligence layer.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32 md:h-40 md:w-40">

                  <motion.div
                    className="absolute left-[-72px] top-1/2 h-[2px] w-[58px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent sm:left-[-96px] sm:w-[80px] md:left-[-140px] md:w-[120px]"
                    animate={{ x: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <motion.div
                    className="absolute right-[-72px] top-1/2 h-[2px] w-[58px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent sm:right-[-96px] sm:w-[80px] md:right-[-140px] md:w-[120px]"
                    animate={{ x: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <div className="absolute h-full w-full rounded-full border border-cyan-400/20 animate-ping" />

                  <div className="absolute h-20 w-20 rounded-full border border-cyan-400/30 sm:h-24 sm:w-24 md:h-28 md:w-28" />

                  <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-cyan-300 to-sky-400 shadow-[0_0_32px_rgba(34,211,238,0.7)] ring-1 ring-cyan-300/30 animate-pulse sm:h-14 sm:w-14 md:h-16 md:w-16">
                    <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] px-5 py-5 sm:rounded-3xl sm:px-6 sm:py-6">
                  <div className="text-[0.78rem] uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.22em]">
                    Conversation intelligence
                  </div>

                  <div className="mt-2 text-[1.55rem] font-semibold text-white sm:text-2xl">
                    NuvaSignal
                  </div>

                  <p className="mt-3 text-[0.92rem] leading-6 text-slate-300 sm:text-sm sm:leading-7">
                    Interprets conversations, meetings, and live interactions,
                    feeding insights back into the intelligence layer.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-12 grid gap-2.5 sm:mt-14 sm:gap-4 sm:grid-cols-3 md:mt-16">

              {[
                "Operational assistants",
                "Automated workflows",
                "Decision support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] border border-white/10 bg-[#0a1526]/85 px-4 py-3 text-center text-[0.9rem] font-medium leading-5 text-white sm:rounded-2xl sm:px-5 sm:py-4 sm:text-sm"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>
        </section>

        <section className="relative border-b border-white/10 bg-[#07111f]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

            <div className="max-w-3xl">
              <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:mb-4 sm:text-xs sm:tracking-[0.24em]">
                Ask Angie
              </div>

              <h2 className="max-w-[11ch] text-[2.3rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:max-w-3xl sm:text-4xl md:text-6xl">
                Ask questions across your organization’s knowledge.
              </h2>

              <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-slate-300 sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-8 md:text-[1.15rem] md:leading-9">
                Angie retrieves knowledge across documents, operations, and conversations to deliver precise answers grounded in your organization's data.
              </p>
            </div>

            <div className="mt-12 rounded-[1.6rem] border border-white/10 bg-[#0a1526]/80 p-5 backdrop-blur sm:mt-14 sm:rounded-3xl sm:p-6 md:mt-16 md:p-8">

              <div className="text-[0.85rem] text-slate-400 sm:text-sm">Example query</div>

              <div className="mt-3 rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-[0.98rem] leading-7 text-white sm:mt-4 sm:px-5 sm:py-4 sm:text-base">
                What were the main safety risks identified in the last operational review?
              </div>

              <div className="mt-5 text-[0.85rem] text-slate-400 sm:mt-6 sm:text-sm">Angie response</div>

              <div className="mt-3 rounded-xl border border-cyan-400/20 bg-[#07111f] px-4 py-3.5 text-[0.95rem] leading-7 text-slate-200 sm:mt-4 sm:px-5 sm:py-4 sm:text-base">
                The review identified three key risks: incomplete maintenance documentation,
                delayed equipment inspection schedules, and inconsistent safety reporting
                across operational teams.
              </div>

            </div>

          </div>
        </section>

        <section className="relative border-b border-white/10 bg-[#07111f]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">

            <div className="max-w-3xl">
              <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:mb-4 sm:text-xs sm:tracking-[0.24em]">
                Use cases
              </div>

              <h2 className="max-w-[11ch] text-[2.3rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:max-w-3xl sm:text-4xl md:text-6xl md:leading-[1.02]">
                Where operational intelligence creates impact.
              </h2>

              <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-slate-300 sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-8 md:text-[1.15rem] md:leading-9">
                NuvaHive turns organizational knowledge, conversations, and operational signals into usable intelligence across teams.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">

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
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08] sm:rounded-3xl sm:p-6"
                >
                  <div className="flex items-start gap-3 text-white sm:items-center">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] sm:mt-0" />
                    <div className="text-[1.05rem] font-semibold tracking-[-0.02em] sm:text-lg">
                      {item.title}
                    </div>
                  </div>

                  <p className="mt-3 text-[0.92rem] leading-6 text-slate-300 sm:mt-4 sm:text-sm sm:leading-7">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        <section id="architecture" className="border-y border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1),transparent_50%),#08111d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
            <SectionHeading
              eyebrow="Built like infrastructure"
              title="Designed for reliability, scalability, and enterprise control."
              description="NuvaHive is designed as an intelligence layer between enterprise inputs and operational outputs. It can ingest, structure, retrieve, reason, and assist without forcing teams into a fragile patchwork of disconnected AI tools."
              className="max-w-3xl"
            />

            <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:mt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 transition-colors duration-300 hover:bg-white/[0.08] sm:rounded-[2rem] sm:p-6 md:p-8">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Building2 className="h-5 w-5" />
                  <span className="text-[0.78rem] uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.22em]">Enterprise flow</span>
                </div>
                <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
                  {architecture.map((block, idx) => (
                    <div key={block.title} className="relative rounded-[1.4rem] border border-white/10 bg-[#0a1526]/80 p-4 sm:rounded-3xl sm:p-5">
                      <div className="text-[1.02rem] font-medium text-white sm:text-lg">{block.title}</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {block.items.map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.88rem] text-slate-300 transition-colors duration-300 hover:bg-white/[0.08] sm:text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                      {idx < architecture.length - 1 ? (
                        <div className="pointer-events-none absolute left-1/2 top-full h-6 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/60 to-transparent sm:h-8" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                {useCases.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 transition-colors duration-300 hover:bg-white/[0.08] sm:rounded-[2rem] sm:p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <h3 className="mt-4 text-[1.08rem] font-semibold leading-6 text-white sm:mt-5 sm:text-xl">{item.title}</h3>
                      <p className="mt-3 text-[0.92rem] leading-6 text-slate-300 sm:text-sm sm:leading-7">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
            <SectionHeading
              eyebrow="Enterprise security and governance"
              title="AI without handing away the keys"
              description="Enterprise AI only becomes useful when security teams and operators can trust the system underneath it. NuvaHive is built for ownership, control, and deployment flexibility."
              className="max-w-3xl"
            />

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 transition-colors duration-300 hover:bg-white/[0.08] sm:rounded-[2rem] sm:p-6 md:p-8">
              <div className="flex items-center gap-3 text-cyan-300">
                <Lock className="h-5 w-5" />
                <span className="text-[0.78rem] uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.22em]">Private AI posture</span>
              </div>
              <div className="mt-5 grid gap-2.5 sm:mt-6 sm:gap-3">
                {securityPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-[1rem] border border-white/10 bg-[#0a1526]/80 px-4 py-3.5 sm:rounded-2xl sm:py-4">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span className="text-[0.92rem] leading-6 text-slate-300 sm:text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 sm:py-20 md:py-24">

          <p className="text-[1.02rem] leading-8 text-slate-400 sm:text-lg md:text-xl">
            Designed for organizations that require 
            <span className="font-medium text-white"> private, controlled AI infrastructure </span>
            with full ownership of their operational knowledge.
          </p>

        </div>

        <div className="mx-auto max-w-4xl px-5 py-6 text-center sm:px-6 sm:py-8 md:py-12"></div>

        <section className="border-y border-white/10 bg-[#091423]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.6rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(20,33,56,0.94),rgba(9,20,35,0.98))] p-5 shadow-[0_0_60px_rgba(34,211,238,0.08)] sm:rounded-[2rem] sm:p-6 md:p-8">
                <div className="text-[0.68rem] uppercase tracking-[0.22em] text-cyan-300 sm:text-xs sm:tracking-[0.24em]">Pricing</div>
                <h3 className="mt-3 text-[2rem] font-semibold tracking-tight text-white sm:mt-4 sm:text-4xl">Enterprise</h3>
                <p className="mt-3 max-w-xl text-[0.98rem] leading-7 text-slate-300 sm:mt-4 sm:text-base">
                  NuvaHive is offered as an enterprise platform with private deployment options, tailored integrations, and a solution architecture aligned to your environment.
                </p>
                <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                  {[
                    "Angie knowledge system",
                    "NuvaSignal assistant layer",
                    "Enterprise integrations",
                    "Private deployment options",
                    "Security and governance alignment",
                    "Dedicated support",
                  ].map((item) => (
                    <div key={item} className="rounded-[1.1rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-[0.92rem] leading-6 text-white transition-colors duration-300 hover:bg-white/[0.08] sm:rounded-2xl sm:text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div id="contact" className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 transition-colors duration-300 hover:bg-white/[0.08] sm:rounded-[2rem] sm:p-6 md:p-8">
                <div className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-400 sm:text-xs sm:tracking-[0.24em]">Contact</div>
                <h3 className="mt-3 text-[1.75rem] font-semibold leading-tight text-white sm:mt-4 sm:text-3xl">Build the intelligence layer for your organization</h3>
                <p className="mt-3 text-[0.98rem] leading-7 text-slate-300 sm:mt-4 sm:text-base">
                  Let’s talk about the systems you want to understand better, automate safely, and turn into operational intelligence.
                </p>
                <form className="mt-6 space-y-3.5 sm:mt-8 sm:space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0a1526]/85 px-4 py-3 text-[0.98rem] text-white outline-none placeholder:text-slate-500 sm:text-base"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Work email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0a1526]/85 px-4 py-3 text-[0.98rem] text-white outline-none placeholder:text-slate-500 sm:text-base"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#0a1526]/85 px-4 py-3 text-[0.98rem] text-white outline-none placeholder:text-slate-500 sm:text-base"
                  />

                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#0a1526]/85 px-4 py-3 text-[0.98rem] text-white outline-none sm:text-base"
                  >
                    <option value="">What are you exploring?</option>
                    <option value="Angie">Angie</option>
                    <option value="NuvaSignal">NuvaSignal</option>
                    <option value="Private AI deployment">Private AI deployment</option>
                    <option value="Enterprise demo">Enterprise demo</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Tell us what you're looking to solve"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0a1526]/85 px-4 py-3 text-[0.98rem] text-white outline-none placeholder:text-slate-500 sm:text-base"
                  />

                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3 text-[0.95rem] font-semibold text-slate-950 transition hover:brightness-110 disabled:opacity-60 sm:w-auto sm:px-7 sm:text-[0.98rem]"
                    >
                      {submitting ? "Sending..." : "Request a Demo"}
                    </button>

                    {status && (
                      <p className="text-sm text-cyan-300 sm:ml-2">
                        {status}
                      </p>
                    )}
                  </div>
                </form>
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
            <div>Operational intelligence platform</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a href="#platform" className="transition hover:text-white">Platform</a>
          <a href="#architecture" className="transition hover:text-white">Architecture</a>
          <a href="#security" className="transition hover:text-white">Security</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
          <Link to="/privacy" className="transition hover:text-white">
            Privacy Policy
          </Link>
        </div>

        <div className="text-slate-500">
          © {new Date().getFullYear()} NuvaHive
        </div>

      </footer>
      </div>
      );
    }
    export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NuvaHiveHomepage />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}