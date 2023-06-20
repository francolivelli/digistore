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
  loginAdmin,
  getWishlist,
  saveAddress,
} = require("../controllers/user.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const router = express.Router();

// SIGN UP
router.post("/signup", signup);

// USER LOGIN
router.post("/login", login);

// ADMIN LOGIN
router.post("/admin-login", loginAdmin);

// HANDLE REFRESH TOKEN
router.get("/refresh", handleRefreshToken);

// LOGOUT
router.get("/logout", logout);

// UPDATE USER
router.put("/", authMiddleware, updateUser);

// SAVE ADDRESS
router.put("/save-address", authMiddleware, saveAddress);

// GET ALL USERS
router.get("/", getAllUsers);

// GET WISHLIST
router.get("/wishlist", authMiddleware, getWishlist);

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
