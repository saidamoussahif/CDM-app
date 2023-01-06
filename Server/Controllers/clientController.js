const Client = require("../Models/clientModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// *************************************************************************

const Register = asyncHandler(async (req, res) => {
  // Our register logic starts here
  try {
    // Get client input
    const { fullname, phone, cin, adress, email, password } = req.body;

    // Validate client input
    if (!(email && password && fullname && phone && cin && adress)) {
      res.status(400).send("All input is required");
    }

    // check if client already exist
    // Validate if client exist in our database
    const Clt = await Client.findOne({ email });

    if (Clt) {
      return res.status(409).send("Email Already Exist. Please Login");
    }

    //Encrypt client password
    encryptedPass = await bcrypt.hash(password, 10);

    // Create client in our database
    const client = await Client.create({
      fullname,
      phone,
      cin,
      adress,
      email,
      password: encryptedPass,
    });
     
    // return new client
    res.status(201).json({
      _id: client.id,
      // fullname: client.fullname,
      // phone: client.phone,
      // cin: client.cin,
      // adress: client.adress,
      email: client.email,
      token: clientToken(client._id),
      // role: client.role
    });
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

const Login = asyncHandler(async (req, res) => {
  const { email, password} = req.body;

  // check email
  const client = await Client.findOne({ email });

  if (client && (await bcrypt.compare(password, client.password))) {
    res
      .json({
        token: clientToken(client._id),
        // role: client.role,
        Name: client.fullname,
      })
  } else {
    res.status(400).json({
      message:"Invalid Credentials"});
  }
});


 // Create token
 const clientToken =  (id) => {
  return jwt.sign({ id }, process.env.TOKEN, {
    expiresIn: '1d',
  })
}

module.exports = { Register, Login };
