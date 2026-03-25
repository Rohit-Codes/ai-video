const catchAsyncError = require("../utils/catchAsyncError");
const userModel = require("../database/models/user.model");
const createToken = require("../middlware/tokencreation");
const bcrypt = require("bcryptjs");
const redisclient = require("../config/redis.client");

const register = catchAsyncError(async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username) {
    return next(new Error("please provide username"));
  }
  if (!email) {
    return next(new Error("please provide email"));
  }
  if (!password) {
    return next(new Error("please provide password"));
  }
  if (!confirmPassword) {
    return next(new Error("please provide confirm password"));
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
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    token,
  });
});

const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Error("Please provide email and password"));
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    return next(new Error("Invalid email or password"));
  }

  const verify = await bcrypt.compare(password, user.password);
  console.log("verify==>", verify);

  if (!verify) {
    return next(new Error("Invalid email or password"));
  }

  const token = createToken(res, user);

  res.status(200).json({
    status: "Success",
    message: "User login successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    token,
  });
});

const catche_Expiration = 600;

const getmyDetails = catchAsyncError(async (req, res, next) => {
  const catch_key = `user : ${req.user.id}`;

  try {
    const catched_user = await redisclient.get(catch_key);

    if (catched_user) {
      console.log(`Cache HIT for user: ${req.user.id}`);
      return res.status(200).json({
        status: "Success",
        user: JSON.parse(catched_user),
      });
    }

    // 2. Cache Miss → Fetch from MongoDB
    console.log(`Cache MISS for user: ${req.user.id}`);

    const user = await userModel.findById(req.user.id).select("-password");
    if (!user) {
      return next(new Error("User not found"));
    }

    // 3. Store in Redis with TTL (Very Important!)
    await redisclient.set(catch_key, JSON.stringify(user), {
      EX: catche_Expiration, // Expires in 5 minutes
    });

    res.status(200).json({
      status: "Success",
      //  message: "User login successfully",
      user,
    });
  } catch (error) {
    return next(new Error(err));
  }
});

const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({
    status: "Success",
    message: "User logged out successfully",
  });
};

module.exports = { register, login, getmyDetails, logout };
