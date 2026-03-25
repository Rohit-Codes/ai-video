const jwt = require("jsonwebtoken");

const createToken = (res, user) => {
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "5d",
    },
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return token;
};

module.exports = createToken;
