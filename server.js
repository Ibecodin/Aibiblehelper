const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/prompt", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: "mistral",
      prompt: prompt,
      stream: false
    });

    res.json({ response: response.data.response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));