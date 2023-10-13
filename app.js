const express = require("express");

const app = express();
const port = 3001;

//listen for requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  //res.send("<p>home page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  //res.send("<p>about page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("./about");
});
