export default async function handler(req, res) {
  const { q = "latest", topic = "general", page = 0 } = req.query;

  const API_KEY = "994ad92756a3d2e963f645d08c268201";
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&topic=${topic}&lang=en&page=${page}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Serverless function error:", err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
