const express = require("express");
const router = express.Router();

const users = require("./user.route.js");
const products = require("./product.route.js");
const blog = require("./blog.route.js");
const categories = require("./productCategory.route.js");
const blogCategories = require("./blogCategory.route.js");
const brands = require("./brand.route.js");
const coupons = require("./coupon.route.js");
const colors = require("./color.route.js");
const enquiries = require("./enq.route.js");

router.use("/users", users);
router.use("/products", products);
router.use("/blogs", blog);
router.use("/categories", categories);
router.use("/blog-categories", blogCategories);
router.use("/brands", brands);
router.use("/coupons", coupons);
router.use("/colors", colors);
router.use("/enquiries", enquiries);

module.exports = router;
