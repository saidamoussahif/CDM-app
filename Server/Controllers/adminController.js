
// const Admin = require("../Models/adminModel");
// const asyncHandler = require("express-async-handler");
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');




// const Register = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
  
//     if (!email || !password) {
//       res.status(400);
//       throw new Error("please add all fields");
//     }
  
//     const userExists = await Admin.findOne({ email });
  
//     if (userExists) {
//       res.status(400);
//       throw new Error("user already exists");
//     }
//     // Hash password
    
//     const slt = await bcrypt.genSalt(10);
//     const hashPass = await bcrypt.hash(password, slt);
  
//     //  create user
//     const admin = await Admin.create({
//       email,
//       password: hashPass,
//     });
//     if (admin) {
//       res.status(200).json({
//         _id: admin.id,
//         email: admin.email,
//         adminToken: generateTOKEN(Admin._id),
//       });
//     } else {
//       res.status(400).json({
//         status: false,
//       });
//     }
//   });

// const Login = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     // check email
//     const admin = await Admin.findOne({ email });
//     if (admin && (await bcrypt.compare(password, admin.password))) {
//       res
//         .json({
//           _id: admin.id,
//           email: admin.email,
//           adminToken: generateTOKEN(admin._id),
//           status: true,
//         })
//         .status(200);
//     } else {
//       res.status(400).json({
//         status: false,
//       });
//     }
//   });

//   const generateTOKEN = (id) => {
//     return jwt.sign({ id }, process.env.TOKEN, {
//       expiresIn: "24h",
//     });
//   };

//   module.exports = { Login,Register };