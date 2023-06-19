const express = require("express");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getBrands,
} = require("../controllers/brand.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const router = express.Router();

// CREATE BRAND
router.post("/", authMiddleware, isAdmin, createBrand);

// UPDATE BRAND
router.put("/:id", authMiddleware, isAdmin, updateBrand);

// DELETE BRAND
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);

// GET BRAND
router.get("/:id", getBrand);

// GET BRANDS
router.get("/", getBrands);

module.exports = router;
