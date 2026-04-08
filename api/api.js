const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hola desde API" });
});

app.listen(3001, () => console.log("API en puerto 3001"));
