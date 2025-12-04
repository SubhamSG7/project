export default async function handler(req, res) {
  const r = await fetch(`https://gnews.io/api/v4/search?q=latest&topic=general&lang=en&apikey=YOUR_KEY`);
  const data = await r.json();
  res.status(200).json(data);
}
