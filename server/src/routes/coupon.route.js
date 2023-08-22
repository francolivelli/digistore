const express = require("express");
const {
  createCoupon,
  getCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controllers/coupon.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const router = express.Router();

// CREATE COUPON
router.post("/", authMiddleware, isAdmin, createCoupon);

// GET COUPONS
router.get("/", authMiddleware, isAdmin, getCoupons);

// GET COUPON
router.get("/:id", authMiddleware, isAdmin, getCoupon);

// UPDATE COUPON
router.put("/:id", authMiddleware, isAdmin, updateCoupon);

// DELETE COUPON
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
