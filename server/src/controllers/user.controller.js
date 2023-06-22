const User = require("../models/user.model.js");
const Product = require("../models/product.model.js");
const Cart = require("../models/cart.model.js");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken.js");
const { validateMongoDbId } = require("../utils/validateMongodbId.js");
const { generateRefreshToken } = require("../config/refreshToken.js");
const jwt = require("jsonwebtoken");
const sendEmail = require("./email.controller.js");
const crypto = require("crypto");

// SIGN UP
const signup = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, mobile, password } = req.body;

  const checkUser = await User.findOne({ email: email });

  if (!checkUser) {
    const user = User.create({
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

// USER LOGIN
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const checkUser = await User.findOne({ email });
  if (checkUser && (await checkUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(checkUser?._id);
    await User.findByIdAndUpdate(
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

// ADMIN LOGIN
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const checkAdmin = await User.findOne({ email });
  if (checkAdmin.role !== "admin") throw new Error("Not authorised");
  if (checkAdmin && (await checkAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(checkAdmin?._id);
    await User.findByIdAndUpdate(
      checkAdmin.id,
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
      _id: checkAdmin?._id,
      firstname: checkAdmin?.firstname,
      lastname: checkAdmin?.lastname,
      email: checkAdmin?.email,
      mobile: checkAdmin?.mobile,
      token: generateToken(checkAdmin?._id),
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
  const user = await User.findOne({ refreshToken });
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
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    res.sendStatus(204);
  }
  await User.findOneAndUpdate(
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
    const userUpdated = await User.findByIdAndUpdate(
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
    const users = await User.find();
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
    const user = await User.findById(id);
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
    const user = await User.findByIdAndDelete(id);
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
    const block = await User.findByIdAndUpdate(
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
    const unblock = await User.findByIdAndUpdate(
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

// UPDATE PASSWORD
const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoDbId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

// FORGOT PASSWORD
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi, please follow this link to reset you password. This link is valid till 10 minutes from now. <a href="http://localhost:5000/api/users/reset-password/${token}">Click here</>`;
    const data = {
      to: email,
      subject: "Forgot password link",
      text: "Hey, user",
      html: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error("Token expired. Please, try again later.");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});

// GET WISHLIST
const getWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const findUser = await User.findById(_id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

// SAVE USER ADDRESS
const saveAddress = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const userUpdated = await User.findByIdAndUpdate(
      _id,
      {
        address: req?.body?.address,
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

// ADD TO CART
const addToCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    let products = [];
    const user = await User.findById(_id);
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;
      let getPrice = await Product.findById(cart[i]._id).select("price").exec();
      object.price = getPrice.price;
      products.push(object);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    let newCart = await new Cart({
      products,
      cartTotal,
      orderby: user?._id,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

// GET CART
const getCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const cart = await Cart.findOne({
      orderby: _id,
    }).populate("products.product");
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

// EMPTY CART
const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const user = await User.findOne({ _id });
    const cart = await Cart.findOneAndRemove({ orderby: user._id });
    res.json(cart);
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
  updatePassword,
  forgotPassword,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  addToCart,
  getCart,
  emptyCart
};
