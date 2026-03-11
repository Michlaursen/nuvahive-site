export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { name, email, company, interest, message, website } = req.body || {};

    // Honeypot spam trap
    if (website) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    console.log("New contact submission:", {
      name,
      email,
      company,
      interest,
      message,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Server error. Please try again." });
  }
}