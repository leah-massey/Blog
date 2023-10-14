const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://Leah:blog123@cluster0.5ftp6qe.mongodb.net/blogging?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs"); // automatically looks into 'views folder'

//middleware and static files
app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    { title: "gouache painting", snippet: "blah blah blah" },
    { title: "decorative lamp", snippet: "blah blah blah" },
    { title: "wool trousers", snippet: "blah blah blah" },
  ];
  res.render("index", { title: "Home", blogs });

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
