const axios = require("axios");

const NEWS_API_KEY = "f0b1c1a3f15e4916adb00abf15e91874";

module.exports = async (req, res) => {
  try {
    const query = req.query.q || "help";
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: query,
        language: "en",
        sortBy: "popularity",
        page: 1,
        apiKey: NEWS_API_KEY,
      },
    });
    const news = response.data.articles;
    res.json(news);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
};