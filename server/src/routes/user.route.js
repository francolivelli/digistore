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
  addToCart,
  getCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
  getOrderByUserId,
  
} = require("../controllers/user.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const router = express.Router();

// SIGN UP
router.post("/signup", signup);

// USER LOGIN
router.post("/login", login);

// ADMIN LOGIN
router.post("/admin-login", loginAdmin);

// ADD TO CART
router.post("/cart", authMiddleware, addToCart);

// APPLY COUPON
router.post("/cart/apply-coupon", authMiddleware, applyCoupon);

// CREATE ORDER
router.post("/cart/cash-order", authMiddleware, createOrder);

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

// GET CART
router.get("/cart", authMiddleware, getCart);

// GET ORDERS
router.get("/get-orders", authMiddleware, getOrders);

// GET ALL ORDERS
router.get("/get-all-orders", authMiddleware, isAdmin, getAllOrders);

// GET ORDER BY USER ID
router.post("/get-order-by-user/:id", authMiddleware, isAdmin, getOrderByUserId);

// UPDATE ORDER STATUS
router.put("/order/:id", authMiddleware, isAdmin, updateOrderStatus);

// GET A SINGLE USER
router.get("/:id", authMiddleware, isAdmin, getUser);

// EMPTY CART
router.delete("/empty-cart", authMiddleware, emptyCart);

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
