

// /pages/api/test-hf.ts
export default async function handler(_req: any, res: any) {
  // ⛔️ Don't hardcode keys in code. Use env in real projects:
  // const apiKey = process.env.HUGGINGFACE_API_KEY || "";
  const apiKey = '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'; // TEMP fallback while testing
  const model = "HuggingFaceH4/zephyr-7b-beta"; // public model (no gating)
  const modelPath = encodeURIComponent(model);

  try {
    const response = await fetch(
      `https://router.huggingface.co/hf-inference/models/${modelPath}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: "System: You are helpful.\nUser: Reply ONLY 'pong'.\nAssistant:",
          options: { wait_for_model: true }, // auto-spin up if sleeping
        }),
      }
    );

    const body = await response.text();

    res.status(response.status).json({
      ok: response.ok,
      status: response.status,
      body: body.slice(0, 600),
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
}
