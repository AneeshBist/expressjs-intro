const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});
app.get("/about", (req, res) => {
  res.send("This is the ABOUT page");
});
app.get("/contact", (req, res) => {
  res.send("Contact page");
});
app.get("/temp", (req, res) => {
  res.send("A Temporary page is being shown");
});
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
