const express = require("express");
const router = express.Router();

const users = require("./user.route.js");
const products = require("./product.route.js");
const blog = require("./blog.route.js");
const categories = require("./productCategory.route.js");
const blogCategories = require("./blogCategory.route.js");
const brands = require("./brand.route.js");

router.use("/users", users);
router.use("/products", products);
router.use("/blogs", blog);
router.use("/categories", categories);
router.use("/blog-categories", blogCategories);
router.use("/brands", brands);

module.exports = router;
