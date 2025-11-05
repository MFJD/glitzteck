// /pages/api/test-hf.ts
export default async function handler(_req: any, res: any) {
  const apiKey = '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';
  if (!apiKey) return res.status(400).json({ ok: false, error: "Missing HUGGINGFACE_API_KEY" });

  const url = "https://router.huggingface.co/v1/chat/completions";

  // Models that are typically available via hf-inference (free tier):
  const candidates = [
    "mistralai/Mistral-7B-Instruct-v0.2", // may require "Request access" once on HF
    "tiiuae/falcon-7b-instruct",
    "google/gemma-7b-it",
    "Qwen/Qwen2.5-7B-Instruct",
  ];

  for (const model of candidates) {
    try {
      const r = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          // Force router to use Hugging Face Inference API provider
          provider: { order: ["hf-inference"] },
          messages: [
            { role: "system", content: "You are a concise assistant." },
            { role: "user", content: "Reply ONLY with: pong" },
          ],
          temperature: 0.7,
          max_tokens: 32,
        }),
      });

      const text = await r.text();
      const ok = r.ok && /pong/i.test(text);

      if (ok) {
        return res.status(200).json({
          ok: true,
          model,
          used_provider: "hf-inference",
          status: r.status,
          body: text.slice(0, 600),
        });
      } else {
        // Try next model; also include a small trace
        // but do not fail yet
        // console.debug(`[test-hf] ${model} -> ${r.status}: ${text.slice(0, 200)}`);
      }
    } catch (e: any) {
      // try next
      // console.error(`[test-hf] ${model} network error`, e);
    }
  }

  return res.status(200).json({
    ok: false,
    tried_models: candidates,
    used_provider: "hf-inference",
    message:
      "No supported model responded via hf-inference. Make sure your token is valid and, for Mistral, click 'Request access' on the model page while logged in.",
  });
}



