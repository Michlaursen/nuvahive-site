import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  GitBranch,
  Menu,
  Network,
  Route as RouteIcon,
  ShieldCheck,
  X,
} from "lucide-react";
import logo from "./assets/nuvahive-logo.svg";
import Privacy from "./Privacy.jsx";

const nav = [
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Company", href: "#company" },
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
    capabilities: [
      "Execution evidence",
      "Integrity checks",
      "Audit-ready records",
    ],
  },
];

const operatingModel = [
  {
    step: "01",
    title: "Understand context and evidence",
    text: "Connect knowledge, records, policies, and operational signals before any workflow is planned.",
  },
  {
    step: "02",
    title: "Build a controlled plan",
    text: "Translate the goal into bounded steps with known dependencies, inputs, and decision points.",
  },
  {
    step: "03",
    title: "Apply policy and approvals",
    text: "Keep consequential actions inside explicit rules, human checkpoints, and role-aware boundaries.",
  },
  {
    step: "04",
    title: "Execute governed workflows",
    text: "Coordinate models, tools, and systems without surrendering operational control.",
  },
  {
    step: "05",
    title: "Verify and preserve evidence",
    text: "Record actions, outcomes, approvals, and supporting context for review and audit.",
  },
];

const useCases = [
  "Controlled AI agent workflows",
  "Operational intelligence",
  "Human-in-the-loop automation",
  "Private or local AI deployment",
  "Governed engineering workflows",
  "Auditable AI-assisted operations",
  "Workflow orchestration across models and tools",
  "AI adoption inside controlled business processes",
];

const businessOutcomes = [
  "Fewer uncontrolled AI actions",
  "Clearer approval boundaries",
  "Better operational visibility",
  "Evidence for review and audit",
  "Safer automation of consequential workflows",
  "Reduced dependence on opaque black-box systems",
];

const engagementOptions = [
  {
    title: "Design partnerships",
    text: "Work with teams deploying AI systems where control, evidence, and governance are required from the start.",
  },
  {
    title: "Pilot deployments",
    text: "Implement a narrow workflow with local evidence capture, approval paths, and a measurable operating model.",
  },
  {
    title: "Trustworthy AI architecture",
    text: "Help technical and operational leaders design private, hybrid, or controlled AI infrastructure.",
  },
  {
    title: "Controlled workflow implementation",
    text: "Use implementation work to deploy, test, and learn with customers without making consulting the company identity.",
  },
];

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
          AI Infrastructure
        </span>
      </div>
    </div>
  );
}

function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_32%),linear-gradient(180deg,#07111f_0%,#08111d_52%,#050b14_100%)]" />
      {children}
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

function ArchitectureDiagram() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/25 backdrop-blur sm:p-5">
      <div className="rounded-2xl border border-cyan-300/15 bg-[#081523] p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-3">
          {architecture.map((component, index) => {
            const Icon = component.icon;
            return (
              <div key={component.name} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                      <Icon className="h-5 w-5 text-cyan-200" />
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                      {component.status}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                    {component.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan-200">
                    {component.role}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {component.description}
                  </p>
                </div>
                {index < architecture.length - 1 ? (
                  <div className="hidden lg:absolute lg:-right-5 lg:top-1/2 lg:block lg:h-px lg:w-6 lg:bg-cyan-300/45" />
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 px-4 py-4 text-center text-sm font-semibold tracking-tight text-cyan-100">
          Kvasir knows. Odin decides and executes. Heimdall proves.
        </div>
      </div>
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
          <option value="design-partnership">Design partnership</option>
          <option value="pilot-deployment">Pilot deployment</option>
          <option value="private-ai-infrastructure">Private AI infrastructure</option>
          <option value="controlled-workflows">Controlled AI workflows</option>
        </select>
      </div>
      <label className="sr-only" htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell us what you are trying to control, automate, or verify."
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
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Built for controlled AI operations
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Infrastructure for trustworthy AI systems.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              NuvaHive is building the knowledge, orchestration, and verification infrastructure needed to deploy AI systems that can reason, act, and remain accountable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#platform">
                <Button className="w-full bg-cyan-300 text-slate-950 hover:bg-cyan-200 sm:w-auto">
                  Explore the architecture
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button className="w-full border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.1] sm:w-auto">
                  Discuss a pilot
                </Button>
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Context", "Systems understand the operating environment before acting."],
                ["Control", "Policies and approval boundaries govern execution."],
                ["Evidence", "Actions and outcomes are preserved for review."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}>
            <ArchitectureDiagram />
          </motion.div>
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

        <section id="platform" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Platform"
            title="One architecture for knowledge, decisions, execution, and proof."
            description="Kvasir, Odin, and Heimdall are presented as a coherent platform direction: knowledge and evidence flow into governed planning and execution, then into verification and assurance."
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
        </section>

        <section id="how-it-works" className="border-y border-white/10 bg-[#08111d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="How it works"
              title="A controlled operating model for AI-enabled workflows."
              description="The architecture is designed for teams that need AI systems to act inside clear boundaries, with evidence preserved at each step."
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
            title="For teams moving AI into real operations."
            description="NuvaHive is aimed at organizations that need AI capability without opaque execution, uncontrolled actions, or weak evidence trails."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <Network className="h-5 w-5 text-cyan-200" />
                <p className="mt-4 text-sm font-medium leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="company" className="border-y border-white/10 bg-[#08111d]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="Company"
              title="An independent deep technology company."
              description="NuvaHive is focused on practical system design for trustworthy AI operations."
            />
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                The company direction is to build infrastructure that combines AI capability with policy, human oversight, and verifiable execution. Consulting remains a deployment and learning capability, not the public identity of the company.
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
                title="Design partnerships, pilots, and controlled workflow implementation."
                description="We work with teams that are deploying AI into consequential workflows and need the architecture to remain understandable, governed, and reviewable."
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
                  <p className="font-semibold text-white">Start with the workflow.</p>
                  <p className="text-sm text-slate-400">Tell us what must remain controlled and verifiable.</p>
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
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="transition hover:text-white">Privacy</Link>
            <a href="#contact" className="transition hover:text-white">Work with us</a>
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
