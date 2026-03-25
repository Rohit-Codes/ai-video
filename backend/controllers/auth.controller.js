const catchAsyncError = require("../utils/catchAsyncError");
const userModel = require("../database/models/user.model");
const createToken = require("../middlware/tokencreation");
const bcrypt = require("bcryptjs");

const register = catchAsyncError(async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username) {
    return next("please provide username");
  }
  if (!email) {
    return next("please provide email");
  }
  if (!password) {
    return next("please provide password");
  }
  if (!confirmPassword) {
    return next("please provide confirm password");
  }

  const user = await userModel.create({
    username,
    email,
    password,
    confirmPassword,
  });

  const token = createToken(res, user);

  res.status(200).json({
    status: "Success",
    message: "User registered successfully",
    token,
  });
});

const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next("Please provide email and password");
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    return next("Invalid email or password");
  }

  const verify = bcrypt.compare(password, user.password);

  if (!verify) {
    return next("Invalid email or password");
  }

  const token = createToken(res, user);

  res.status(200).json({
    status: "Success",
    message: "User login successfully",
    token,
  });
});

const getmyDetails = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id).select("-password");
  res.status(200).json({
    status: "Success",
    //  message: "User login successfully",
    user,
  });
});

module.exports = { register, login, getmyDetails };
