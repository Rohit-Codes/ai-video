const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: [true, "username should be unique"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      validate: [validator.isEmail, "Please provide valid email"],
      unique: [true, "email should be unique"],
    },
    password: {
      type: String,
      min: [5, "Password length should be atleast 6"],
      max: [256, "Password length cannot be exceed from 256"],
    },
    confirmPassword: {
      type: String,
      required: [true, "confirm password is required"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Password and confirm password should be same",
      },
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  this.confirmPassword = undefined;
  next;
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
