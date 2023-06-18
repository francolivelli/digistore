const express = require("express");
const router = express.Router();

const users = require("./user.route.js");
const products = require("./product.route.js");
const blog = require("./blog.route.js");

router.use("/users", users);
router.use("/products", products);
router.use("/blogs", blog);

module.exports = router;
