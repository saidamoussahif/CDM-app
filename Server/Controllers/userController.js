const User = require("../Models/userModel");
const Account = require("../Models/accountModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// *************************************************************************

const Register = asyncHandler(async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input
    const { fullname, phone, cin, address, email, password } = req.body;

    // Validate user input
    if (!fullname || !phone || !cin || !address || !email || !password) {
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
      address,
      email,
      password: encryptedPass,
    });

    // return new user
    res.json({
      _id: user.id,
      fullname: user.fullname,
      phone: user.phone,
      cin: user.cin,
      address: user.address,
      email: user.email,
      role: user.role,
      token: userToken(user._id),
    });
  } catch (err) {
    res.json({
      message: "Invalid registred",
      status: 400,
    });
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
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      cin: user.cin,
      address: user.address,
      email: user.email,
      phone: user.phone,
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

//  get user by id
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).populate({
    options: { strictPopulate: false },
    path: "accounts",
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = { Register, Login, getUserById };
