import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { fetchSearch, fetchTop } from "./newsClient";

const app = express();
app.use(cors());

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const API_KEY = process.env.NEWS_API_KEY;
console.log("Using NEWS_API_KEY:", API_KEY ? "YES" : "NO");
if (!API_KEY) {
  console.warn("WARN: NEWS_API_KEY missing in .env");
}

app.get("/health", (_req: Request, res: Response) => {
  res.json({ ok: true, ts: new Date().toISOString() });
});

app.get("/api/top", async (req, res) => {
  const country = (req.query.country as string) || "us";
  const raw = await fetchTop(country, API_KEY!);
  res.json(raw);
});

app.get("/api/search", async (req, res) => {
  const q = (req.query.q as string) || "technology";
  const raw = await fetchSearch(q, API_KEY!);
  res.json(raw);
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
