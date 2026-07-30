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
  SlidersHorizontal,
  TestTube2,
  UserCheck,
  X,
} from "lucide-react";
import logo from "./assets/nuvahive-logo.svg";
import Privacy from "./Privacy.jsx";

const TURNSTILE_SITE_KEY = "0x4AAAAAAD9CgEk98di1_ztN";

const nav = [
  { label: "Evidence", href: "#evidence" },
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Company", href: "#company" },
  { label: "Work with us", href: "#contact" },
];

const architecture = [
  {
    name: "BIFRÖST",
    role: "The trust gateway",
    status: "Governed ingress",
    icon: "/bifrost.png",
    description:
      "Examines and governs what enters the system. It identifies provenance, classifies content, assigns trust and sensitivity labels, and applies policy before information can enter the trusted architecture.",
    flowLabel: "Controls what enters",
    capabilities: [
      "Provenance and classification",
      "Trust and sensitivity labels",
      "Admit, sanitize, quarantine, or reject",
      "Evidence for every routing decision",
    ],
  },
  {
    name: "KVASIR",
    role: "Knowledge and provenance layer",
    status: "Trusted knowledge",
    icon: "/kvasir.png",
    description:
      "Ingests, structures, retrieves, and contextualizes trusted information while preserving its source, classification, restrictions, and evidence lineage.",
    flowLabel: "Knows",
    capabilities: [
      "Structured trusted knowledge",
      "Source and provenance context",
      "Restriction-aware retrieval",
      "Evidence-linked memory",
    ],
  },
  {
    name: "ODIN",
    role: "Decision and execution layer",
    status: "Governed authority",
    icon: "/odin.png",
    description:
      "Evaluates policy, plans actions, authorizes capabilities, and performs governed execution. Only ODIN may create authority for an execution workflow.",
    flowLabel: "Decides and executes",
    capabilities: [
      "Policy evaluation and planning",
      "Capability authorization",
      "Approval and execution boundaries",
      "Governed action",
    ],
  },
  {
    name: "HEIMDALL",
    role: "Verification and proof layer",
    status: "Cross-system assurance",
    icon: "/heimdall.png",
    description:
      "Validates claims, actions, evidence, and system integrity across every component. It verifies what occurred without creating execution authority.",
    flowLabel: "Proves",
    capabilities: [
      "Claim and evidence validation",
      "Execution verification",
      "Integrity and lineage checks",
      "Audit-ready proof",
    ],
  },
];

const platformPreviewInputs = [
  "Documents and prompts",
  "APIs, web, and messages",
  "Tool and model outputs",
  "Retrieved knowledge",
];

const platformPreviewLayers = [
  "BIFRÖST — governed ingress",
  "KVASIR — trusted knowledge",
  "ODIN — governed authority",
  "HEIMDALL — verification",
];

const platformPreviewOutputs = [
  "Admitted and labeled content",
  "Authorized actions",
  "Execution receipts",
  "Verified evidence",
];

const bifrostInputs = [
  "Documents and user prompts",
  "API responses and web content",
  "Tool and model outputs",
  "Retrieved knowledge",
  "External events and messages",
];

const bifrostControls = [
  "Source identity and provenance",
  "Deterministic normalization and classification",
  "Trust, sensitivity, tenant, and access-scope labels",
  "Hostile or embedded instruction detection",
  "Policy-based admission, redaction, quarantine, or rejection",
  "Evidence records for classification and routing decisions",
];

const operatingModel = [
  {
    step: "01",
    title: "Reconstruct agent activity",
    text: "Pull together commit history, pull requests, CI runs, and review threads into one timeline.",
  },
  {
    step: "02",
    title: "Capture execution context",
    text: "Record the model in use, the repository state, and the exact commands and files touched.",
  },
  {
    step: "03",
    title: "Preserve evidence",
    text: "Hash every artifact and bind it to its source, so nothing can be edited after the fact without detection.",
  },
  {
    step: "04",
    title: "Review acceptance",
    text: "A human reviewer checks the record against policy and decides whether the output is accepted.",
  },
  {
    step: "05",
    title: "Enforce boundaries",
    text: "Once trust is established, move consequential actions behind required approval and provider restrictions.",
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

const pilotInputs = [
  "Git history",
  "Pull requests",
  "CI and test logs",
  "Agent logs or transcripts",
  "Review comments",
  "Release notes or deployment records",
];

const pilotDeliverables = [
  "One reconstructed agent workflow timeline",
  "Evidence inventory with source references",
  "Acceptance and review gaps",
  "Recommended real-time capture points",
  "Attestation and enforcement roadmap",
];

const relayPreserves = [
  "Artifact identity",
  "Origin and destination",
  "Authorization references",
  "Correlation and causation",
  "Trust-zone transitions",
  "Delivery and failure records",
  "Execution receipts",
  "Evidence lineage",
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

const fitSignals = [
  "AI agents are already creating pull requests, code changes, or operational artifacts.",
  "Security, audit, or customer review now requires evidence of how agent work is accepted.",
  "Engineering or operations leaders need approval boundaries before giving agents more autonomy.",
  "The team wants a low-friction post-hoc pilot before changing runtime behavior.",
];

const notFitSignals = [
  "The team is still casually exploring AI with no agent-generated work to review.",
  "There is no meaningful need for evidence, approval, auditability, or controlled publication.",
  "The immediate goal is a general chatbot, broad RAG search, or AI strategy deck.",
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
              NuvaHive governed architecture
            </p>
          </div>
          <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
            Platform direction
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {architecture.map((component) => {
            return (
              <div key={component.name} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
                    <img
                      src={component.icon}
                      alt=""
                      className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(103,232,249,0.2)]"
                    />
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

        <div className="mt-3 rounded-2xl border border-white/10 bg-[#07111f]/70 p-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Primary information path
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-200">
            {["External sources", "BIFRÖST", "KVASIR", "ODIN", "HEIMDALL"].map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 ? <ArrowRight className="h-3.5 w-3.5 text-cyan-300" /> : null}
                <span className={item === "BIFRÖST" ? "rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-cyan-100" : ""}>
                  {item}
                </span>
              </React.Fragment>
            ))}
          </div>
          <div className="mt-3 grid gap-2 border-t border-white/10 pt-3 text-xs leading-5 text-slate-400 sm:grid-cols-2">
            <p>HEIMDALL verifies evidence across every component.</p>
            <p>ODIN may authorize governed actions through the Relay.</p>
          </div>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Governed system</p>
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
            BIFRÖST controls what enters. KVASIR knows. ODIN decides and executes. HEIMDALL proves.
          </p>
          <p className="text-slate-300">
            Admission → Knowledge → Authority → Proof
          </p>
        </div>
      </div>
    </div>
  );
}

function EvidenceRecordPreview() {
  return (
    <div className="glow-card rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
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
      const formData = new FormData(event.currentTarget);
      const turnstileToken = formData.get("cf-turnstile-response") || "";

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          "cf-turnstile-response": turnstileToken,
        }),
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
      window.turnstile?.reset();
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
      <div
        className="cf-turnstile"
        data-sitekey={TURNSTILE_SITE_KEY}
        data-action="turnstile-spin-v2"
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
                <div key={title} className="glow-card rounded-2xl border border-white/10 bg-white/[0.045] p-4">
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
                <div key={outcome} className="glow-card flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
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
                  className="glow-card grid gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 md:grid-cols-[88px_0.7fr_1.3fr] md:items-start"
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

        <section id="pilot" className="border-y border-white/10 bg-[#08111d]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:px-8 lg:py-28">
            <div>
              <SectionHeading
                eyebrow="First pilot"
                title="Start with one post-hoc Observe workflow."
                description="The first pilot should not require agents to change how they work. Reconstruct one completed workflow from the systems your team already uses, then decide where stronger capture or enforcement belongs."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact">
                  <Button className="w-full bg-cyan-300 text-slate-950 hover:bg-cyan-200 sm:w-auto">
                    Discuss a post-hoc pilot
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="glow-card rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                    <Database className="h-5 w-5 text-cyan-200" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                      Inputs
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      Existing evidence sources
                    </h3>
                  </div>
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {pilotInputs.map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-[#07111f]/70 px-3 py-2 text-sm text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glow-card rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                    <FileCheck2 className="h-5 w-5 text-cyan-200" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                      Outputs
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      What the pilot produces
                    </h3>
                  </div>
                </div>
                <div className="mt-5 grid gap-3">
                  {pilotDeliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#07111f]/70 px-3 py-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Platform"
            title="Governed admission, knowledge, execution, and proof."
            description="BIFRÖST, KVASIR, ODIN, and HEIMDALL are distinct systems with narrow, versioned interfaces. Together they control what the architecture may see, know, authorize, execute, and prove."
          />
          <div className="mt-8 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.045] p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-100">
              {["External sources", "BIFRÖST", "KVASIR", "ODIN", "HEIMDALL"].map((item, index) => (
                <React.Fragment key={item}>
                  {index > 0 ? <ArrowRight className="h-4 w-4 text-cyan-300" /> : null}
                  <span className={item === "BIFRÖST" ? "rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-cyan-100" : "px-1 py-2"}>
                    {item}
                  </span>
                </React.Fragment>
              ))}
            </div>
            <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 md:grid-cols-2">
              <p className="text-sm leading-6 text-slate-300">
                HEIMDALL verifies claims, decisions, execution evidence, and integrity across the architecture—not only at the end of a flow.
              </p>
              <p className="text-sm leading-6 text-slate-300">
                ODIN may authorize external capabilities through the Relay. Information entering the trusted system still passes through BIFRÖST.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {architecture.map((component) => {
              return (
                <div key={component.name} className="glow-card rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07]">
                      <img
                        src={component.icon}
                        alt=""
                        className="h-14 w-14 object-contain drop-shadow-[0_0_16px_rgba(103,232,249,0.24)]"
                      />
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
          <div className="mt-6 grid gap-5 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.04] p-5 sm:p-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                BIFRÖST admission boundary
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                May this information enter, and under what conditions?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                BIFRÖST is an evidence-producing, policy-governed trust boundary—not a generic firewall or a single-purpose prompt-injection filter. It may admit information without authorizing any action.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#081523] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Examines
                </p>
                <ul className="mt-3 space-y-2">
                  {bifrostInputs.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                      <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#081523] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Governs
                </p>
                <ul className="mt-3 space-y-2">
                  {bifrostControls.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                      <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="glow-card mt-6 rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  Governed transport
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  The Relay moves authorized artifacts between trust zones.
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  The Relay preserves identity, authority, destination, and evidence while an artifact travels. It does not decide whether raw external information is safe to ingest, and it does not create execution authority.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-300/15 bg-[#081523] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    HUGINN · Outbound
                  </p>
                  <h4 className="mt-3 font-semibold text-white">Carries governed intent outward.</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Transports ODIN-authorized requests, commands, capability invocations, and execution instructions to tools, models, providers, services, and execution environments.
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-300/15 bg-[#081523] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    MUNINN · Inbound
                  </p>
                  <h4 className="mt-3 font-semibold text-white">Carries governed evidence home.</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Returns results, receipts, observations, provider responses, failures, status changes, and evidence from external capabilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#07111f]/70 p-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Governed execution loop
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-200">
                {["ODIN authority", "HUGINN", "External capability", "MUNINN", "Results and receipts", "HEIMDALL"].map((item, index) => (
                  <React.Fragment key={item}>
                    {index > 0 ? <ArrowRight className="h-3.5 w-3.5 text-cyan-300" /> : null}
                    <span>{item}</span>
                  </React.Fragment>
                ))}
              </div>
              <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-5 text-slate-400">
                Returned information still carries its external origin and must satisfy BIFRÖST admission policy before it can become trusted internal knowledge or influence another action.
              </p>
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                The Relay preserves
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {relayPreserves.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-[#081523] px-3 py-1.5 text-xs font-medium text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-5 rounded-2xl border border-amber-200/15 bg-amber-200/[0.05] px-4 py-3 text-sm leading-6 text-amber-50/85">
              BIFRÖST asks whether information may enter and under what conditions. The Relay asks whether an authorized artifact may move from here to there. Neither HUGINN nor MUNINN creates execution authority; only ODIN may authorize governed execution.
            </p>
          </div>
          <p className="mt-6 text-center text-sm font-semibold leading-7 text-cyan-100">
            BIFRÖST admits. KVASIR knows. ODIN decides and executes. HUGINN carries intent outward. MUNINN carries evidence home. HEIMDALL proves.
          </p>
        </section>

        <section id="how-it-works" className="border-y border-white/10 bg-[#08111d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="How it works"
              title="What actually happens to a piece of agent work."
              description="Independent of which stage of the ladder you're on, every piece of agent activity moves through the same five mechanical steps before it counts as evidence."
            />
            <div className="mt-12 grid gap-4">
              {operatingModel.map((item) => (
                <div key={item.step} className="glow-card grid gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 md:grid-cols-[120px_0.8fr_1.2fr] md:items-start">
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
                <div key={item.title} className="glow-card rounded-2xl border border-white/10 bg-white/[0.045] p-5">
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
                  <div key={title} className="glow-card rounded-2xl border border-white/10 bg-white/[0.045] p-4">
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
                  <div key={item.title} className="glow-card rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glow-card rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-6 lg:p-8">
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
          <div className="mt-12">
            <div className="mb-6 grid gap-3 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  Fit filter
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Best when agent work already needs review.
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-7 text-slate-400 lg:justify-self-end">
                The strongest starting point is an existing workflow with real artifacts, real reviewers, and a clear reason to preserve evidence.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="glow-card rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.045] p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  Good fit
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {fitSignals.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-cyan-300/10 bg-[#07111f]/50 p-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glow-card rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Not a fit yet
                </p>
                <div className="mt-5 grid gap-3">
                  {notFitSignals.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#07111f]/45 p-3">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                      <p className="text-sm leading-6 text-slate-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
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
