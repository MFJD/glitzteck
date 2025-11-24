import { useState, useEffect } from "react";

interface Rates {
  [key: string]: number;
}

export default function Home() {
  const [amount, setAmount] = useState<number>(1);
  const [from, setFrom] = useState<string>("USD");
  const [to, setTo] = useState<string>("EUR");
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch all available currencies once
  useEffect(() => {
    fetch("https://api.frankfurter.app/currencies")
      .then((res) => res.json())
      .then((data: Rates) => setCurrencies(Object.keys(data)))
      .catch((err) => console.error(err));
  }, []);

  const handleConvert = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      );
      const data = await res.json();
      setResult(data.rates[to]);
    } catch (err) {
      console.error(err);
      setResult(null);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: "50px auto", fontFamily: "Arial" }}>
      <h1>Live Currency Converter</h1>

      <div style={{ marginBottom: 10 }}>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>From: </label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {currencies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>To: </label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {currencies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleConvert} disabled={loading}>
        {loading ? "Converting..." : "Convert"}
      </button>

      {result !== null && (
        <h2 style={{ marginTop: 20 }}>
          {amount} {from} = {result} {to}
        </h2>
      )}
    </div>
  );
}
