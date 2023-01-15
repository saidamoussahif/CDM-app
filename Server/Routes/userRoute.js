const express = require("express");
const {
  Login,
  Register,
  getUserById,
} = require("../Controllers/userController");
const router = express.Router();

const { verifyToken } = require("../Middlewares/Authen");

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/get-user-by-id").get(verifyToken, getUserById);

module.exports = router;
