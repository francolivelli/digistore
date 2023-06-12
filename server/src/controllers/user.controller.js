const userModel = require("../models/user.model.js");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken.js");

// SIGN UP
const signup = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, mobile, password } = req.body;

  const checkUser = await userModel.findOne({ email: email });

  if (!checkUser) {
    const user = userModel.create({
      firstname,
      lastname,
      email,
      mobile,
      password,
    });

    res.json(user);
  } else {
    throw new Error(`User already exists`);
  }
});

// LOGIN
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const checkUser = await userModel.findOne({ email });
  if (checkUser && (await checkUser.isPasswordMatched(password))) {
    res.json({
      _id: checkUser?._id,
      firstname: checkUser?.firstname,
      lastname: checkUser?.lastname,
      email: checkUser?.email,
      mobile: checkUser?.mobile,
      token: generateToken(checkUser?._id),
    });
  } else {
    throw new Error("Invalid credentials");
  }
});

// UPDATE USER
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const userUpdated = await userModel.findByIdAndUpdate(
      id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(userUpdated);
  } catch (error) {
    throw new Error(error);
  }
});

// GET ALL USERS
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    throw new Error(error);
  }
});

// GET A SINGLE USER
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    res.json({
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// DELETE USER
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    res.json({
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { signup, login, getAllUsers, getUser, deleteUser, updateUser };
