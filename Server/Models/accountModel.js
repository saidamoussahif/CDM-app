const mongoose = require("mongoose");

const accountSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    // numero_compte:{
    //     type: String,
    //     required: true,
    // },
    solde: {
      type: Number,
      required: true,
    },
    agence: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Account", accountSchema);
