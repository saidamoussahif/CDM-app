const Account = require("../Models/accountModel");
const asyncHandler = require("express-async-handler");

const getAccounts = async (req, res) => {
  const accounts = await Account.find().populate("client_id");
  res.status(200).json(accounts);
};

const createAccount = asyncHandler(async (req, res) => {
  const Accounts = await Account.create({
    numero_compte: req.body.numero_compte,
    client_id: req.body.client_id,
    solde: req.body.solde,
    agence: req.body.agence,
  });
  res.status(200).json(Accounts);
});

const updateAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);

  if (!account) {
    res.status(400);
    throw new error("account not found");
  }

  const updatedAccount = await Account.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ updatedAccount });
});

const deleteAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);

  if (!account) {
    res.status(400);
    throw new error("account not found");
  }
  await account.remove();

  res.status(200).json({ message: "account deleted succefuly" });
});

module.exports = { getAccounts, createAccount, updateAccount, deleteAccount };
