const userModel = require("../models/user.model.js");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken.js");
const { validateMongoDbId } = require("../utils/validateMongodbId.js");
const { generateRefreshToken } = require("../config/refreshToken.js");
const jwt = require("jsonwebtoken");

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
    const refreshToken = await generateRefreshToken(checkUser?._id);
    const updateUser = await userModel.findByIdAndUpdate(
      checkUser.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
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

// HANDLE REFRESH TOKEN
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken)
    throw new Error("There's no refresh token in cookies.");
  const refreshToken = cookie.refreshToken;
  const user = await userModel.findOne({ refreshToken });
  if (!user) throw new Error("No refresh token matched.");
  jwt.verify(refreshToken, process.env.SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });
});

// LOGOUT
const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken)
    throw new Error("There's no refresh token in cookies.");
  const refreshToken = cookie.refreshToken;
  const user = await userModel.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    res.sendStatus(204);
  }
  await userModel.findOneAndUpdate(
    { refreshToken },
    {
      refreshToken: "",
    }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204);
});

// UPDATE USER
const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const userUpdated = await userModel.findByIdAndUpdate(
      _id,
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
  validateMongoDbId(id);
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
  validateMongoDbId(id);
  try {
    const user = await userModel.findByIdAndDelete(id);
    res.json({
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// BLOCK USER
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const block = await userModel.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User blocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

// UNBLOCK USER
const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const unblock = await userModel.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User unblocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
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
};
