const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

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
app.use(express.urlencoded({ extended: true })); // allows us to accept form data in blog post erq

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//.blog routes
app.use("/blogs", blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
