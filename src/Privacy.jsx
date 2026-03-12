import { Link } from "react-router-dom";
import logo from "./assets/nuvahive-logo.svg";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#07111f] text-slate-300">
      <div className="mx-auto max-w-4xl px-6 py-24">

        <div className="mb-12 flex items-center gap-3">
          <img src={logo} alt="NuvaHive" className="h-8 w-8" />
          <span className="font-medium text-white">NuvaHive</span>
        </div>

        <Link to="/" className="text-cyan-300 transition hover:text-white">
          ← Back to NuvaHive
        </Link>

        <h1 className="mt-8 text-4xl font-semibold text-white">Privacy Policy</h1>

        <p className="mt-6">
          NuvaHive respects your privacy. This Privacy Policy explains how we
          collect, use, and protect information when you visit our website.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">Information we collect</h2>
        <p className="mt-3">
          We may collect basic information such as contact details you provide,
          analytics data about how visitors use the website, and information
          submitted through contact or demo request forms.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">How we use information</h2>
        <p className="mt-3">
          Information is used to respond to inquiries, improve our services,
          operate the website, and communicate with users who request
          information about NuvaHive.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">Data protection</h2>
        <p className="mt-3">
          NuvaHive implements reasonable security measures to protect information
          from unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">Contact</h2>
        <p className="mt-3">
          If you have questions about this policy, you can contact us at
          privacy@nuvahive.ai.
        </p>

        <p className="mt-12 text-sm text-slate-400">
          Last updated: March 2026
        </p>
      </div>
    </div>
  );
}