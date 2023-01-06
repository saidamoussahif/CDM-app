const mongoose = require("mongoose");

const releveBancaireSchema = mongoose.Schema(
  {
    account_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Account",
    },
    date: {
      type: String,
      required: true,
    },
    libelle: {
        type: String,
        required: true,
  },
},
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("releveBancaire", releveBancaireSchema);
