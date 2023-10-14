const express = require("express");
const morgan = require("morgan");

const app = express();

//register view engine
app.set("view engine", "ejs"); // automatically looks into 'views folder'

//listen for requests
app.listen(3001);

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
