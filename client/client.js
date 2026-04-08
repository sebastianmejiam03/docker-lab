const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://api:3001");
    res.send(`Respuesta API: ${response.data.message}`);
  } catch (err) {
    res.send("Error conectando con API");
  }
});

app.listen(3000, () => console.log("Cliente en 3000"));
