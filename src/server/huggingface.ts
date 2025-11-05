// /server/huggingface.ts
type HFChatChoice = { message: { role: string; content: string } };
type HFChatResponse = { choices?: HFChatChoice[]; error?: any };

const HF_URL = "https://router.huggingface.co/v1/chat/completions";

// Put Qwen first (it worked in your test), then a couple of alternates.
const HF_MODELS = [
  "Qwen/Qwen2.5-7B-Instruct",
  "tiiuae/falcon-7b-instruct",
  "google/gemma-7b-it",
];

async function tryModel(apiKey: string, model: string, messages: any[]) {
  const r = await fetch(HF_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      provider: { order: ["hf-inference"] }, // 👈 this matches your working test
      messages,
      temperature: 0.7,
      max_tokens: 220,
    }),
  });

  const raw = await r.text();
  if (!r.ok) {
    console.error(`🤖 HF router error (${r.status}) [${model}] =>`, raw);
    return "";
  }

  try {
    const data: HFChatResponse = JSON.parse(raw);
    return data.choices?.[0]?.message?.content?.trim() || "";
  } catch {
    console.error("🧩 HF router parse error:", raw);
    return "";
  }
}

export async function callHuggingFace(prompt: string): Promise<string | null> {
  const apiKey = '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';
  if (!apiKey) {
    console.warn("⚠️ Missing HUGGINGFACE_API_KEY in .env.local");
    return null;
  }

  const messages = [
    { role: "system", content: "You are a helpful, concise assistant." },
    { role: "user", content: prompt },
  ];

  for (const model of HF_MODELS) {
    const out = await tryModel(apiKey, model, messages);
    if (out) return out;
  }

  return null; // let the API route do a graceful fallback
}
