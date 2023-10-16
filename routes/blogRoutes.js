const express = require("express");
const blogController = require("../controllers/blogController");
const multer = require("multer");

const router = express.Router();

// define storage for the images
const storage = multer.diskStorage({
  //destination for files
  desination: function (request, file, callback) {
    callback(null, "./public/uploads/images");
  },
  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters from multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
});

//.blog routes

router.get("/", blogController.blog_index);
router.post("/", upload.single("image"), blogController.blog_create_post);
router.get("/create", blogController.blog_create_get);
router.get("/:id", blogController.blog_details);
router.delete("/:id", blogController.blog_delete);

module.exports = router;
