import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { name, email, company, interest, message, website } = req.body || {};

    // honeypot spam trap
    if (website) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    await resend.emails.send({
    from: "NuvaHive (Angie) <angie@nuvahive.ai>",
    to: ["miguel@nuvahive.ai"],
    reply_to: email,
    subject: "New NuvaHive Contact Request",
    html: `
    <h2>NuvaHive Contact Request</h2>
    <p>A new request was submitted through nuvahive.ai.</p>

    <hr/>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || "-"}</p>
    <p><strong>Interest:</strong> ${interest || "-"}</p>

    <p><strong>Message:</strong></p>
    <p>${message}</p>

    <hr/>

    <p style="font-size:12px;color:#888">
    Sent from the NuvaHive website contact form.
    </p>
    `
    });

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error." });
  }
}
