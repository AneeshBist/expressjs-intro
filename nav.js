const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  //res.send("<h1>Welcome to the home page</h1>");
  res.write("<h1>Welcome written to home page</h1>");
  res.send();
});
app.get("/about", (req, res) => {
  res.send("This is the ABOUT page");
});
app.get("/contact", (req, res) => {
  res.send("Contact page");
});
// app.get("/temp", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       name: "billy",
//     },
//     {
//       id: 2,
//       name: "tim",
//     },

//     {
//       id: 3,
//       name: "joice",
//     },
//   ]);
// });
app.get("/temp", (req, res) => {
  res.json([
    {
      id: 1,
      name: "billy",
    },
    {
      id: 2,
      name: "tim",
    },

    {
      id: 3,
      name: "joice",
    },
  ]);
});
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
