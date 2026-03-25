const express = require("express");
const authController = require("../controllers/auth.controller");
const verifyuser = require("../middlware/verifyUser");

const authRoutes = express.Router();

authRoutes.route("/register").post(authController.register);
authRoutes.route("/login").post(authController.login);
authRoutes.route("/get-me").get(verifyuser, authController.getmyDetails);
module.exports = authRoutes;
