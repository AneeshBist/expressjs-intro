const path = require("path");
const express = require("express");
const app = express();

//console.log(__dirname);
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "./templates");

//set view engine
app.set("view engine", "hbs");
app.set("views", templatePath);

//built in middleware
//app.use(express.static(staticPath));

app.get("/about", (req, res) => {
  res.render("about");
});

// template
app.get("/", (req, res) => {
  res.render("index", {
    firstname: "Joe",
  });
});

app.get("/", (req, res) => {
  res.send("Hello from the other side");
});

app.get("/about", (req, res) => {
  res.send("Hello from About Page");
});

app.listen(8000, () => {
  console.log("Listening port 8000");
});
