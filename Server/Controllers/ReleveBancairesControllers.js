const releveBancaire = require("../Models/releveBancaireModel");
const asyncHandler = require("express-async-handler");

const getReleveBancaires = async (req, res) => {
  const releveBancaires = await releveBancaire.find().populate("account_id");
  res.status(200).json({
    releveBancaires,
  });
};

const createReleveBancaire = asyncHandler(async (req, res) => {
  const releves = await releveBancaire.create({
    date: req.body.date,
    account_id: req.body.account_id,
    libelle: req.body.libelle,
  });
  res.status(200).json(releves);
});

const updateReleveBancaire = asyncHandler(async (req, res) => {
  const releves = await releveBancaire.findById(req.params.id);

  if (!releves) {
    res.status(400);
    throw new error("releve not found");
  }

  const updatedReleveBancaire = await releveBancaire.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ updatedReleveBancaire });
});



module.exports = {
  getReleveBancaires,
  createReleveBancaire,
  updateReleveBancaire,
};
