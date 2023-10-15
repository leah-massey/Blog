const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

//.blog routes
router.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

router.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "all Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs"); // user is redirected back to the blogs page after submitting post
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
