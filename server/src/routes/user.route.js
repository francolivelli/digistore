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
  updatePassword,
  forgotPassword,
  resetPassword,
} = require("../controllers/user.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const router = express.Router();

// SIGN UP
router.post("/signup", signup);

// LOGIN
router.post("/login", login);

// HANDLE REFRESH TOKEN
router.get("/refresh", handleRefreshToken);

// LOGOUT
router.get("/logout", logout);

// UPDATE USER
router.put("/", authMiddleware, updateUser);

// GET ALL USERS
router.get("/", getAllUsers);

// GET A SINGLE USER
router.get("/:id", authMiddleware, isAdmin, getUser);

// DELETE USER
router.delete("/:id", deleteUser);

// BLOCK USER
router.put("/block/:id", authMiddleware, isAdmin, blockUser);

// UNBLOCK USER
router.put("/unblock/:id", authMiddleware, isAdmin, unblockUser);

// UPDATE PASSWORD
router.put("/password", authMiddleware, updatePassword);

// FORGOT PASSWORD
router.post("/forgot-password", forgotPassword);

// RESET PASSWORD
router.put("/reset-password/:token", resetPassword);

module.exports = router;
