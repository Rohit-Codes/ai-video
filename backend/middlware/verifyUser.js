const catchAsyncError = require("../utils/catchAsyncError");
const jwt = require("jsonwebtoken");

const verifyuser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next("Please provide token");
  }

  const decode = await jwt.verify(token, process.env.JWT_KEY);

  if (!decode) {
    return next("Invalid token");
  }
  req.user = decode;

  next();
});

module.exports = verifyuser;
