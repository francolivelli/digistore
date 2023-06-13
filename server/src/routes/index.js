const express = require("express");
const router = express.Router();

const users = require("./user.route.js");
const products = require("./product.route.js");

router.use("/users", users);
router.use("/products", products);

module.exports = router;
