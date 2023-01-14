const User = require("../Models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// *************************************************************************

const Register = asyncHandler(async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input
    const { fullname, phone, cin, adress, email, password } = req.body;

    // Validate user input
    if (!email || !password || !fullname || !phone || !cin || !adress) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const CheckUser = await User.findOne({ email });

    if (CheckUser) {
      return res.status(409).send("Email Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPass = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      fullname,
      phone,
      cin,
      adress,
      email,
      password: encryptedPass,
    });

    // return new user
    res.status(201).json({
      _id: user.id,
      fullname: user.fullname,
      phone: user.phone,
      cin: user.cin,
      adress: user.adress,
      email: user.email,
      token: userToken(user._id),
    });
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// *************************************************************************
const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.fullname,
      email: user.email,
      role: user.role,
      token: userToken(user._id),
    });
  } else {
    res.status(400).json({
      message: "Invalid Credentials",
    });
  }
});

// Create token
const userToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN, {
    expiresIn: "24h",
  });
};

module.exports = { Register, Login };
