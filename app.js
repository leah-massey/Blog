const express = require("express");

const app = express();

//register view engine
app.set("view engine", "ejs"); // automatically looks into 'views folder'

//listen for requests
app.listen(3001);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
  // res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
