export default async function handler(req, res) {
  const r = await fetch(`https://gnews.io/api/v4/search?q=latest&topic=general&lang=en&apikey=994ad92756a3d2e963f645d08c268201`);
  const data = await r.json();
  res.status(200).json(data);
}
