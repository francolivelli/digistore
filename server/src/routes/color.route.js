const express = require("express");
const {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getColors,
} = require("../controllers/color.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const router = express.Router();

// CREATE COLOR
router.post("/", authMiddleware, isAdmin, createColor);

// UPDATE COLOR
router.put("/:id", authMiddleware, isAdmin, updateColor);

// DELETE COLOR
router.delete("/:id", authMiddleware, isAdmin, deleteColor);

// GET COLOR
router.get("/:id", getColor);

// GET COLORS
router.get("/", getColors);

module.exports = router;
