const express = require("express");
const {
  uploadImages,
  deleteImages,
} = require("../controllers/upload.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
const router = express.Router();

// UPLOAD PRODUCT IMAGES
router.post(
  "/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

// DELETE PRODUCT IMAGES
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
