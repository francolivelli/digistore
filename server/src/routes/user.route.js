const express = require("express");
const {
  signup,
  login,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const router = express.Router();

// SIGN UP
router.post("/signup", signup);

// LOGIN
router.post("/login", login);

// UPDATE USER
router.put("/:id", updateUser);

// GET ALL USERS
router.get("/", getAllUsers);

// GET A SINGLE USER
router.get("/:id", getUser);

// DELETE USER
router.delete("/:id", deleteUser);

module.exports = router;
