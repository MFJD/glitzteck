// /pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { callHuggingFace } from "@/server/huggingface";

type Msg = { role: "user" | "assistant"; content: string };

// ---------------- Scope detection ----------------
type Scope = "in" | "maybe" | "out";

const OOS_FOOTER =
  "\n\n— " +
  "If you need help with a project or have a special request, email info@glitzteck.com and we’ll take care of it.";

const IN_SCOPE_PATTERNS: RegExp[] = [
  /what does glitzteck (build|do)/i,
  /what is glitzteck/i,
  /glitzteck/i,
  /services?|offerings?|capabilities?/i,
  /custom saas|build.*saas|multi-?tenant/i,
  /pricing|price|cost|quote/i,
  /stripe|payment|paypal|billing|subscriptions?/i,
  /mvp|minimum viable|timeline|how fast|launch/i,
  /tech stack|technology|framework|frontend|backend|database|devops/i,
  /maintenance|support plan|sla|retainer/i,
  /integrations?|api|crm|marketplace|webhook/i,
  /onboard|demo|consultation|book a call|contact/i,
];

function assessScope(text: string): Scope {
  const q = (text || "").toLowerCase();
  if (!q.trim()) return "out";
  // Direct Glitzteck/service intent
  if (IN_SCOPE_PATTERNS.some(rx => rx.test(q))) return "in";
  // If they mention software/dev terms, treat as maybe (answer normally, no footer)
  if (/(frontend|backend|database|react|next\.js|node|typescript|api|deploy|auth|ui|ux|seo|hosting)/i.test(q)) {
    return "maybe";
  }
  return "out";
}

// ---------------- Deterministic answers for common in-scope Qs ----------------
function deterministicAnswer(userText: string): string | null {
  const q = (userText || "").toLowerCase();

  if (/what does glitzteck (build|do)/i.test(q) || /what is glitzteck/i.test(q) || /services|offerings|capabilities/i.test(q)) {
    return "Glitzteck designs and builds modern SaaS products and custom web applications. We cover product strategy, UX/UI, full-stack development, third-party integrations (Stripe, CRMs, marketplaces), and ongoing maintenance.";
  }
  if (/custom saas/i.test(q) || /build.*saas/i.test(q)) {
    return "Yes — we build custom SaaS platforms end-to-end: authentication, roles/permissions, billing, dashboards, admin tools, and APIs. We start with a lean MVP and iterate quickly with real user feedback.";
  }
  if (/pricing|price|cost|quote/i.test(q)) {
    return "Pricing depends on scope and speed. We offer fixed-scope MVPs, monthly product teams, and hybrid models. Share your timeline and key features and we’ll recommend the most efficient option.";
  }
  if (/stripe|payment|paypal|billing|subscriptions?/i.test(q)) {
    return "We integrate Stripe/PayPal and regional gateways: subscriptions, per-seat pricing, trials, coupons, proration, dunning, and VAT/tax with best practices.";
  }
  if (/mvp|minimum viable|how fast|timeline|launch/i.test(q)) {
    return "Most MVPs land in 4–8 weeks depending on scope and integrations. We keep a tight loop: weekly demos, clear milestones, and a protected cut-list to hit launch confidently.";
  }
  if (/tech stack|technology|framework|frontend|backend|database/i.test(q)) {
    return "Typical stack: React/Next.js on the front-end; Node.js/TypeScript for the back-end; Postgres for data; Prisma/Drizzle for ORM; Redis/queues for async; CI/CD on modern cloud platforms.";
  }
  if (/maintenance|support plan|sla|retainer/i.test(q)) {
    return "Yes — we provide maintenance plans and product retainers for roadmap work, upgrades, and support. We can tailor SLAs to your needs.";
  }
  if (/integrations?|api|crm|marketplace|webhook/i.test(q)) {
    return "We build robust integrations with popular CRMs, billing providers, analytics, marketplaces, and custom APIs — including webhooks, sync jobs, and reliability patterns.";
  }
  if (/onboard|demo|consultation|book a call|contact/i.test(q)) {
    return "Happy to help. Email **info@glitzteck.com** with a brief on your project and timeline, and we’ll schedule a consultation.";
  }

  return null;
}

// ---------------- API route ----------------
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ reply: "Method not allowed" });

  try {
    const { messages } = req.body as { messages: Msg[] };
    const lastUser = [...(messages || [])].reverse().find(m => m.role === "user")?.content || "";

    const scope = assessScope(lastUser);

    // 1) If clearly in-scope, prefer deterministic; else ask AI, no footer
    if (scope === "in") {
      const pre = deterministicAnswer(lastUser);
      if (pre) return res.status(200).json({ reply: pre });

      const systemMsg = `
You are Glitzteck AI (SaaS & custom web apps).
Answer only within: what we build, custom SaaS, pricing, payments/integrations, MVP timeline, tech stack, maintenance, onboarding.
Be friendly, concise, and practical. Avoid promises you can't execute.
`.trim();

      const prompt =
        `System: ${systemMsg}\n\n` +
        (messages || [])
          .map(m => (m.role === "user" ? `User: ${m.content}\n` : `Assistant: ${m.content}\n`))
          .join("") +
        "Assistant:";

      const ai = await callHuggingFace(prompt);
      const reply = ai && ai.length > 0 ? ai : deterministicAnswer(lastUser) || "Let’s clarify your scope and timeline so we can propose the best path to launch.";
      return res.status(200).json({ reply });
    }

    // 2) If "maybe" (general dev/software chat): allow a normal AI answer (no footer)
    if (scope === "maybe") {
      const systemMsg = `
You are Glitzteck AI. Be helpful and concise.
If the topic touches SaaS/web development, provide practical, high-level guidance suitable for a client conversation.
Avoid deep unrelated topics (e.g., politics, medicine).
`.trim();

      const prompt =
        `System: ${systemMsg}\n\n` +
        (messages || [])
          .map(m => (m.role === "user" ? `User: ${m.content}\n` : `Assistant: ${m.content}\n`))
          .join("") +
        "Assistant:";

      const ai = await callHuggingFace(prompt);
      const reply = ai && ai.length > 0
        ? ai
        : "Here’s a high-level approach based on common SaaS/web patterns. If you share more specifics, I can tailor the next steps.";
      return res.status(200).json({ reply });
    }

    // 3) If "out" (not related): answer briefly, then append a polite footer
    {
      const systemMsg = `
You are a concise, friendly assistant.
Answer the user's question briefly and clearly.
`.trim();

      const prompt =
        `System: ${systemMsg}\n\n` +
        (messages || [])
          .map(m => (m.role === "user" ? `User: ${m.content}\n` : `Assistant: ${m.content}\n`))
          .join("") +
        "Assistant:";

      const ai = await callHuggingFace(prompt);

      // If AI failed, still give a generic helpful line
      const base =
        ai && ai.length > 0
          ? ai
          : "Here’s a brief answer. If you’d like to discuss software or product work, I can help with that too.";

      const reply = `${base}${OOS_FOOTER}`;
      return res.status(200).json({ reply });
    }
  } catch (e) {
    console.error("API /chat error:", e);
    // Final safety net: polite footer on top of a generic line
    return res.status(200).json({
      reply:
        "Thanks for your question. If you need help with a software project, we can assist. " + OOS_FOOTER,
    });
  }
}
