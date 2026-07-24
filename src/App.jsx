import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Code2,
  Database,
  FileCheck2,
  GitBranch,
  GitPullRequest,
  LockKeyhole,
  Linkedin,
  Menu,
  PackageCheck,
  Route as RouteIcon,
  ShieldCheck,
  SlidersHorizontal,
  TestTube2,
  UserCheck,
  X,
} from "lucide-react";
import logo from "./assets/nuvahive-logo.svg";
import Privacy from "./Privacy.jsx";

const nav = [
  { label: "Evidence", href: "#evidence" },
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Work with us", href: "#contact" },
];

const architecture = [
  {
    name: "Kvasir",
    role: "Knowledge and evidence",
    status: "Platform direction",
    icon: Database,
    description:
      "Designed to collect operational context, preserve source evidence, and maintain memory that AI systems can use without losing grounding.",
    flowLabel: "Knows",
    capabilities: [
      "Operational knowledge",
      "Context and memory",
      "Evidence-aware retrieval",
    ],
  },
  {
    name: "Odin",
    role: "Governed decisions and execution",
    status: "In development",
    icon: RouteIcon,
    description:
      "Designed to build plans, apply policy boundaries, route approvals, and execute workflows with explicit control over what AI systems can do.",
    flowLabel: "Decides and executes",
    capabilities: [
      "Planning and orchestration",
      "Approval boundaries",
      "Governed workflow execution",
    ],
  },
  {
    name: "Heimdall",
    role: "Verification and assurance",
    status: "Reserved trust subsystem",
    icon: ShieldCheck,
    description:
      "Reserved for verification, integrity checks, audit trails, and assurance evidence that can show what happened and why.",
    flowLabel: "Proves",
    capabilities: [
      "Execution evidence",
      "Integrity checks",
      "Audit-ready records",
    ],
  },
];

const platformPreviewInputs = [
  "Git history",
  "Pull requests",
  "CI and test logs",
  "Agent activity",
];

const platformPreviewLayers = [
  "Kvasir",
  "Odin",
  "Heimdall (reserved)",
  "Approval and policy rules",
];

const platformPreviewOutputs = [
  "Evidence records",
  "Disposition outcomes",
  "Audit-ready trail",
  "Approval history",
];

const operatingModel = [
  {
    step: "01",
    title: "Reconstruct agent activity",
    text: "Start with Git history, pull requests, CI logs, agent logs, telemetry, tests, and review comments.",
  },
  {
    step: "02",
    title: "Capture execution context",
    text: "Record model identity, repository state, commands, tools, process boundaries, and file changes.",
  },
  {
    step: "03",
    title: "Preserve evidence",
    text: "Bind artifacts to hashes, source identity, review state, verification output, and release evidence.",
  },
  {
    step: "04",
    title: "Review acceptance",
    text: "Show what happened, what changed, which controls applied, and whether the evidence supports acceptance.",
  },
  {
    step: "05",
    title: "Enforce boundaries",
    text: "Move toward approvals, provider restrictions, policy gates, single-use authority, and fail-closed publication.",
  },
];

const useCases = [
  {
    title: "AI coding agent review",
    trigger: "Before agents get merge rights on production code",
    icon: Code2,
  },
  {
    title: "Agent-generated pull request evidence",
    trigger: "When a customer security review asks how agent PRs get accepted",
    icon: GitPullRequest,
  },
  {
    title: "CI and test evidence capture",
    trigger: "When test output needs to survive past the CI run",
    icon: TestTube2,
  },
  {
    title: "Human approval before publication",
    trigger: "Before an agent can publish or deploy without a human in the loop",
    icon: UserCheck,
  },
  {
    title: "Private or hybrid agent governance",
    trigger: "When agents touch data that can't leave your infrastructure",
    icon: LockKeyhole,
  },
  {
    title: "Audit-ready activity records",
    trigger: "Ahead of a SOC 2 or ISO audit",
    icon: ClipboardCheck,
  },
  {
    title: "Provider and model boundary review",
    trigger: "When switching or restricting model providers",
    icon: SlidersHorizontal,
  },
  {
    title: "Controlled release evidence",
    trigger: "Before a release needs a defensible paper trail",
    icon: PackageCheck,
  },
];

const businessOutcomes = [
  "See what agents were allowed to do",
  "See what agents actually changed",
  "Connect reviews to evidence",
  "Separate raw, sanitized, and approved artifacts",
  "Create a path from observation to enforcement",
  "Reduce blind trust in agent output",
];

const evidenceLadder = [
  {
    title: "Post-hoc Observe",
    status: "Lowest-friction start",
    text: "Reconstruct agent activity after the fact from Git, pull requests, CI logs, agent logs, telemetry, test output, and review comments.",
  },
  {
    title: "Real-time Observe",
    status: "Stronger capture",
    text: "Capture model identity, context references, commands, tools, file changes, process boundaries, tests, and runtime evidence while work occurs.",
  },
  {
    title: "Attest",
    status: "Portable evidence",
    text: "Produce tamper-evident records showing who authorized work, what executed, what changed, what verification ran, and what review concluded.",
  },
  {
    title: "Enforce",
    status: "Controlled action",
    text: "Apply required approvals, provider restrictions, policy gates, single-use execution authority, and fail-closed publication where justified.",
  },
];

const sampleEvidenceRecord = {
  action: "Review agent-generated change",
  fields: [
    { label: "Model", value: "Captured model identity" },
    { label: "Repository", value: "Repository and revision captured" },
    { label: "Authorized by", value: "Reviewer and approval boundary captured" },
    { label: "Verification", value: "Test and policy evidence preserved" },
    { label: "Review outcome", value: "Disposition recorded before acceptance" },
  ],
  hash: "sha256:example-evidence-record",
};

const relayStates = [
  "Raw",
  "Sanitized",
  "Approved",
  "Quarantined",
  "Externally transferable",
];

const engagementOptions = [
  {
    title: "Design partnerships",
    text: "Work with teams that need evidence boundaries around AI agents before deeper automation is trusted.",
  },
  {
    title: "Post-hoc observation pilots",
    text: "Start by reconstructing agent activity from existing engineering and review artifacts before adding real-time capture.",
  },
  {
    title: "Attestation architecture",
    text: "Define the evidence, review, and release records needed before an organization can accept agent output.",
  },
  {
    title: "Enforcement roadmap",
    text: "Map where approvals, policy gates, provider restrictions, and fail-closed boundaries should enter the workflow.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MotionDiv = motion.div;

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#07111f] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="NuvaHive" className="h-9 w-9" />
      <div className="flex flex-col leading-none">
        <span className="text-lg font-semibold tracking-tight text-white">
          NuvaHive
        </span>
        <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-slate-400">
          Agent Evidence
        </span>
      </div>
    </div>
  );
}

function PageShell({ children }) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,#07111f_0%,#08111d_52%,#050b14_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 animate-grid-drift bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none fixed -left-32 top-[-12rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-cyan-300/15 blur-3xl animate-breathe-glow" />
      <div className="pointer-events-none fixed right-[-16rem] top-40 -z-10 h-[38rem] w-[38rem] rounded-full bg-blue-500/10 blur-3xl animate-breathe-glow" />
      <div className="pointer-events-none fixed bottom-[-18rem] left-1/3 -z-10 h-[32rem] w-[32rem] rounded-full bg-emerald-300/8 blur-3xl animate-breathe-glow" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PlatformPreview() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/25 backdrop-blur sm:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_78%_78%,rgba(59,130,246,0.12),transparent_34%)]" />
      <div className="relative rounded-2xl border border-cyan-300/15 bg-[#081523]/90 p-4 sm:p-5">
        <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Platform
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              NuvaHive evidence layer
            </p>
          </div>
          <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
            Platform direction
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {architecture.slice(0, 2).map((component) => {
            const Icon = component.icon;
            return (
              <div key={component.name} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-2">
                    <Icon className="h-4 w-4 text-cyan-200" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {component.flowLabel}
                    </p>
                    <h3 className="text-lg font-semibold text-white">{component.name}</h3>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {component.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-1.5 text-xs leading-5 text-slate-300">
                      <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-cyan-300" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
          <div className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Inputs</p>
            <ul className="mt-3 space-y-1.5 text-xs leading-5 text-slate-300">
              {platformPreviewInputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mx-auto hidden h-6 w-px bg-cyan-300/40 sm:block" />
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Evidence layer</p>
            <ul className="mt-3 space-y-1.5 text-xs leading-5 text-slate-200">
              {platformPreviewLayers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mx-auto hidden h-6 w-px bg-cyan-300/40 sm:block" />
          <div className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Outputs</p>
            <ul className="mt-3 space-y-1.5 text-xs leading-5 text-slate-300">
              {platformPreviewOutputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 grid gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 px-4 py-4 text-sm sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="font-semibold tracking-tight text-cyan-100">
            Kvasir knows. Odin decides and executes. Heimdall proves.
          </p>
          <p className="text-slate-300">
            Context → Control → Evidence
          </p>
        </div>
      </div>
    </div>
  );
}

function EvidenceRecordPreview() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-2.5">
            <FileCheck2 className="h-4 w-4 text-cyan-200" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Sample evidence record
          </p>
        </div>
        <span className="w-fit rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs font-semibold text-amber-100">
          Illustrative structure
        </span>
      </div>
      <p className="mt-4 text-sm font-semibold text-white">
        {sampleEvidenceRecord.action}
      </p>
      <dl className="mt-4 divide-y divide-white/10 border-t border-white/10">
        {sampleEvidenceRecord.fields.map((field) => (
          <div key={field.label} className="grid grid-cols-[0.8fr_1.2fr] gap-3 py-2.5 text-sm">
            <dt className="text-slate-400">{field.label}</dt>
            <dd className="text-slate-200">{field.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 truncate font-mono text-xs text-slate-500">
        {sampleEvidenceRecord.hash}
      </p>
      <p className="mt-4 rounded-2xl border border-white/10 bg-[#07111f]/60 px-3 py-2 text-xs leading-5 text-slate-400">
        Illustrative example only. This shows the kind of record the platform direction is designed around, not live product output.
      </p>
    </div>
  );
}

function ContactForm() {
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

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("Thanks. The NuvaHive team received your request.");
      setForm({
        name: "",
        email: "",
        company: "",
        interest: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus(error.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-[#081523] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input type="text" name="website" value={form.website} onChange={handleChange} className="hidden" tabIndex="-1" autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sr-only" htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Name" required className={inputClass} />
        <label className="sr-only" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sr-only" htmlFor="company">Company</label>
        <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Company" className={inputClass} />
        <label className="sr-only" htmlFor="interest">Interest</label>
        <select id="interest" name="interest" value={form.interest} onChange={handleChange} className={inputClass}>
          <option value="">What are you exploring?</option>
          <option value="post-hoc-observe">Post-hoc agent observation</option>
          <option value="real-time-observe">Real-time agent observation</option>
          <option value="attestation">Agent evidence attestation</option>
          <option value="enforcement">Policy gates and enforcement</option>
        </select>
      </div>
      <label className="sr-only" htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell us what your agents touch, change, review, or publish."
        required
        rows="5"
        className={inputClass}
      />
      <Button
        type="submit"
        disabled={submitting}
        className="bg-cyan-300 text-slate-950 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Start a conversation"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      {status ? <p className="text-sm text-slate-300">{status}</p> : null}
    </form>
  );
}

function NuvaHiveHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <PageShell>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#" aria-label="NuvaHive home">
            <LogoMark />
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:block">
              <Button className="border border-cyan-300/30 bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                Work with us
              </Button>
            </a>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen ? (
          <div className="border-t border-white/10 bg-[#07111f]/95 px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 md:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-32">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Built for controlled AI operations
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Infrastructure for{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                trustworthy AI systems
              </span>
              .
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              NuvaHive helps teams see what AI agents were allowed to do, what they actually did, what changed, and whether the resulting evidence supports acceptance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#evidence">
                <Button className="w-full bg-cyan-300 text-slate-950 hover:bg-cyan-200 sm:w-auto">
                  Explore agent evidence
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button className="w-full border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.1] sm:w-auto">
                  Map a workflow
                </Button>
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Observe", "Reconstruct or capture what happened across agent work."],
                ["Attest", "Turn activity, changes, reviews, and tests into portable evidence."],
                ["Enforce", "Move controlled workflows toward approvals and policy gates."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          >
            <PlatformPreview />
          </MotionDiv>
        </section>

        <section className="border-y border-white/10 bg-[#08111d]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {businessOutcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                  <p className="text-sm leading-6 text-slate-300">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="evidence" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Governed agent evidence"
                title="Start by observing. Grow toward attestation and enforcement."
                description="The initial commercial product is intentionally narrower than the full platform: help teams understand agent activity, preserve evidence, and decide whether output should be accepted."
              />
              <div className="mt-8">
                <EvidenceRecordPreview />
              </div>
            </div>
            <div className="grid gap-4">
              {evidenceLadder.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 md:grid-cols-[88px_0.7fr_1.3fr] md:items-start"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-cyan-200">
                      {item.status}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
              <div className="rounded-3xl border border-amber-200/20 bg-amber-200/[0.06] p-5 text-sm leading-7 text-amber-50/85">
                Post-hoc observation is reconstructed evidence. It is useful because it is low-friction, but it should not be presented as equivalent to real-time capture.
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Platform"
            title="One architecture for knowledge, decisions, execution, and proof."
            description="The initial product is presented as one coherent platform. Internally, Kvasir, Odin, and Heimdall remain distinct systems with narrow versioned interfaces."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {architecture.map((component) => {
              const Icon = component.icon;
              return (
                <div key={component.name} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                      <Icon className="h-5 w-5 text-cyan-200" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{component.name}</h3>
                      <p className="text-sm text-cyan-200">{component.status}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-base font-semibold text-slate-100">{component.role}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{component.description}</p>
                  <div className="mt-6 grid gap-2">
                    {component.capabilities.map((capability) => (
                      <div key={capability} className="rounded-xl border border-white/10 bg-[#081523] px-3 py-2 text-sm text-slate-300">
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  Relay boundary
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Controlled movement of evidence artifacts.
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Relay is the boundary for artifacts as they move from raw capture toward approved, transferable evidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {relayStates.map((state) => (
                  <span
                    key={state}
                    className="rounded-full border border-cyan-300/15 bg-[#081523] px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-white/10 bg-[#08111d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="How it works"
              title="A practical operating model for agent evidence."
              description="The path starts with reconstructed evidence from existing systems, then moves toward real-time capture, attestation, and enforcement where the workflow requires it."
            />
            <div className="mt-12 grid gap-4">
              {operatingModel.map((item) => (
                <div key={item.step} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 md:grid-cols-[120px_0.8fr_1.2fr] md:items-start">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">{item.step}</p>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Use cases"
            title="For teams that hit a specific trigger."
            description="NuvaHive tends to matter the moment agent work meets a real deadline or a real reviewer, not as a general-purpose adoption exercise."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-2.5">
                    <Icon className="h-5 w-5 text-cyan-200" />
                  </div>
                  <p className="mt-4 text-sm font-medium leading-6 text-slate-200">{item.title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{item.trigger}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="company" className="border-y border-white/10 bg-[#08111d]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
              <SectionHeading
                eyebrow="Company"
                title="An independent deep technology company."
                description="NuvaHive is focused on governed evidence infrastructure for AI agents and controlled automation."
              />
              <div className="space-y-5 text-base leading-8 text-slate-300">
                <p>
                The company direction is to build infrastructure that combines AI capability with policy, human oversight, evidence, and verifiable execution. Consulting remains a deployment and learning capability, not the public identity of the company.
              </p>
              <p>
                We are building for organizations that want private, local, sovereign, or hybrid AI infrastructure and need clear control over what AI systems can know, decide, execute, and prove.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Practical", "Built around real operational constraints."],
                  ["Inspectable", "Designed for visibility and accountability."],
                  ["Controlled", "Human oversight and policy boundaries remain central."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Work with us"
                title="Start with a governed agent evidence workflow."
                description="We work with teams that need to reconstruct, review, attest, or eventually enforce AI agent activity without treating agent output as automatically acceptable."
              />
              <div className="mt-10 grid gap-4">
                {engagementOptions.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-6 lg:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                  <GitBranch className="h-5 w-5 text-cyan-200" />
                </div>
                <div>
                  <p className="font-semibold text-white">Map an evidence workflow.</p>
                  <p className="text-sm text-slate-400">Tell us what your agents touch, change, and publish.</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050b14]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <LogoMark />
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy" className="transition hover:text-white">Privacy</Link>
            <a href="#contact" className="transition hover:text-white">Work with us</a>
            <a
              href="https://www.linkedin.com/company/nuvahive"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NuvaHive on LinkedIn"
              className="text-slate-400 transition hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span>© {new Date().getFullYear()} NuvaHive</span>
          </div>
        </div>
      </footer>
    </PageShell>
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
