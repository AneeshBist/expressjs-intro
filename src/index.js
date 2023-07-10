const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

//console.log(__ dirname) ;
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

//set view  engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

//built in middleware
app.use(express.static(staticPath));

// template
app.get("/", (req, res) => {
  res.render("index", {
    firstname: "Joea",
  });
});

app.get("/about", (req, res) => {
  //console.log(req.query);
  res.render("about", {
    fname: req.query.fname,
    lname: req.query.lname,
  });
});

// app.get("/", (req, res) => {
//   res.send("Hello from the other side");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello from About Page");
// });

app.get("*", (req, res) => {
  res.render("404", {
    errorComp: "Page  could not be found. try again.",
  });
});

app.listen(8000, () => {
  console.log("Listening port 8000");
});
