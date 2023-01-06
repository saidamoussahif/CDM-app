const mongoose = require("mongoose");


const ClientSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    }, 
    phone: {
      type: Number,
      require: true,
    },
    cin:{
      type: String,
      require: true,
    },
    adress:{
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    // role: {
    //   type: String,
    //   enum: ['user', 'admin'],
    //   default: "user",
    // },
  },
  {
    timeTamps: true,
  }
);

module.exports = mongoose.model("Client",ClientSchema);
