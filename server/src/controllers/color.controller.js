const Color = require("../models/color.model");
const asyncHandler = require("express-async-handler");
const { validateMongoDbId } = require("../utils/validateMongodbId");

// CREATE COLOR
const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});

// UPDATE COLOR
const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedColor);
  } catch (error) {
    throw new Error(error);
  }
});

// DELETE COLOR
const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedColor = await Color.findByIdAndDelete(id);
    res.json(deletedColor);
  } catch (error) {
    throw new Error(error);
  }
});

// GET COLOR
const getColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const color = await Color.findById(id);
    res.json(color);
  } catch (error) {
    throw new Error(error);
  }
});

// GET COLORS
const getColors = asyncHandler(async (req, res) => {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getColors,
};
