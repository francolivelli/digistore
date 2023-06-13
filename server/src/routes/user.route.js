const express = require("express");
const {
  signup,
  login,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
} = require("../controllers/user.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const router = express.Router();

// SIGN UP
router.post("/signup", signup);

// LOGIN
router.post("/login", login);

// HANDLE REFRESH TOKEN
router.get("/refresh", handleRefreshToken)

// LOGOUT
router.get("/logout", logout)

// UPDATE USER
router.put("/", authMiddleware, updateUser);

// GET ALL USERS
router.get("/", getAllUsers);

// GET A SINGLE USER
router.get("/:id", authMiddleware, isAdmin, getUser);

// DELETE USER
router.delete("/:id", deleteUser);

// BLOCK USER
router.put("/block/:id", authMiddleware, isAdmin, blockUser)

// UNBLOCK USER
router.put("/unblock/:id", authMiddleware, isAdmin, unblockUser)

module.exports = router;
