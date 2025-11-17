// pages/api/subscribe.js
export default async function handler(req : any, res : any) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { email, hp_name } = req.body || {};

    // Simple honeypot: if filled, likely bot
    if (hp_name) {
      return res.status(400).json({ error: "Bot detected" });
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const API_KEY = process.env.BREVO_API_KEY;
    const LIST_ID = parseInt(process.env.BREVO_LIST_ID as any, 10);

    if (!API_KEY || !LIST_ID) {
      console.error("Missing BREVO env vars");
      return res.status(500).json({ error: "Server misconfiguration" });
    }

    // Brevo create contact endpoint
    const payload = {
      email: email,
      listIds: [LIST_ID],
      updateEnabled: true, // if contact exists, update instead of failing
      attributes: {}
    };

    const resp = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY
      },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    let body;
    try { body = JSON.parse(text); } catch (e) { body = { raw: text }; }

    if (resp.ok) {
      // contact created/updated
      return res.status(201).json({ message: "Subscribed. Check your email if double-opt-in is enabled." });
    } else {
      // forward Brevo error for debugging (in prod you might hide this)
      console.error("Brevo API error", resp.status, body);
      return res.status(resp.status).json({ error: body?.message || JSON.stringify(body) });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
