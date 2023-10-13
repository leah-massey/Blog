const express = require("express");

const app = express();

//register view engine
app.set("view engine", "ejs"); // automatically looks into 'views folder'

const port = 3001;

//listen for requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index");
  // res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});
