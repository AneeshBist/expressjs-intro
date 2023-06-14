const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the other side");
});

app.get("/about", (req, res) => {
  res.send("Hello from About Page");
});

app.listen(8000, () => {
  console.log("Listening port 8000");
});
