const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
} = require("../controllers/blog.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const router = express.Router();

// CREATE BLOG
router.post("/", authMiddleware, isAdmin, createBlog);

// LIKE BLOG
router.put("/likes", authMiddleware, likeBlog);

// DISLIKE BLOG
router.put("/dislikes", authMiddleware, dislikeBlog);

// UPDATE BLOG
router.put("/:id", authMiddleware, isAdmin, updateBlog);

// GET BLOG
router.get("/:id", getBlog);

// GET BLOGS
router.get("/", getBlogs);

// DELETE BLOGS
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
