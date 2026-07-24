import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => (
    {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char]
  ));
}

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (Array.isArray(forwardedFor)) {
    return forwardedFor[0]?.split(",")[0]?.trim() || "";
  }

  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0]?.trim() || "";
  }

  return req.socket?.remoteAddress || "";
}

async function verifyTurnstileToken(token, clientIp) {
  if (!process.env.TURNSTILE_SECRET) {
    throw new Error("TURNSTILE_SECRET is not configured.");
  }

  const verificationResponse = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET,
      response: token,
      remoteip: clientIp,
    }),
  });

  const result = await verificationResponse.json();
  return result.success === true;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const {
      name,
      email,
      company,
      interest,
      message,
      website,
      "cf-turnstile-response": turnstileToken,
    } = req.body || {};

    // honeypot spam trap
    if (website) {
      return res.status(200).json({ ok: true });
    }

    const turnstileVerified = await verifyTurnstileToken(
      turnstileToken || "",
      getClientIp(req)
    );

    if (!turnstileVerified) {
      return res.status(403).json({ error: "Turnstile verification failed." });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "-");
    const safeInterest = escapeHtml(interest || "-");
    const safeMessage = escapeHtml(message);

    await resend.emails.send({
    from: "NuvaHive <angie@nuvahive.ai>",
    to: ["angie@nuvahive.ai", "miguel@nuvahive.ai"],
    reply_to: email,
    subject: `NuvaHive Inquiry — ${escapeHtml(company || name)}`,
    html: `
    <h2>NuvaHive Contact Request</h2>
    <p>A new request was submitted through nuvahive.ai.</p>

    <hr/>

    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Company:</strong> ${safeCompany}</p>
    <p><strong>Interest:</strong> ${safeInterest}</p>

    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>

    <hr/>

    <p style="font-size:12px;color:#888">
    Sent from the NuvaHive website contact form.
    </p>
    `
    });

    await resend.emails.send({
    from: "NuvaHive <angie@nuvahive.ai>",
    to: [email],
    reply_to: "angie@nuvahive.ai",
    subject: "We received your NuvaHive request",
    html: `
        <p>Hi ${safeName},</p>

        <p>Thanks for reaching out to <strong>NuvaHive</strong>.</p>

        <p>Your request has been received and our team will review it shortly.</p>

        <p>We'll follow up with you soon.</p>

        <p>— NuvaHive</p>
    `
    });

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error." });
  }
}
