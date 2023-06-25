const express = require("express");
const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getEnquiries,
} = require("../controllers/enq.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const router = express.Router();

// CREATE ENQUIRY
router.post("/", createEnquiry);

// UPDATE ENQUIRY
router.put("/:id", authMiddleware, isAdmin, updateEnquiry);

// DELETE ENQUIRY
router.delete("/:id", authMiddleware, isAdmin, deleteEnquiry);

// GET ENQUIRY
router.get("/:id", getEnquiry);

// GET ENQUIRIES
router.get("/", getEnquiries);

module.exports = router;
