const Account = require("../Models/accountModel");
const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const Email = process.env.Email;
const Pass = process.env.PASS;

const getAccounts = async (req, res) => {
  const accounts = await Account.find().populate("client_id");
  res.status(200).json(accounts);
};

const createAccount = asyncHandler(async (req, res) => {
  const Accounts = await Account.create({
    numero_compte: req.body.numero_compte,
    user_id: req.body.user_id,
    solde: req.body.solde,
    agence: req.body.agence,
  });
  res.status(200).json(Accounts);
});

const ConfirmationEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: Email,
      pass: Pass,
    },
  });
  const email = {
    from: Email,
    to: req.params.Email,
    subject: "Confirmation account",
    text: " Your account created successfuly!!!",
  };
  transporter.sendMail(email, function (err, info) {
    if (err) {
      res.status(200).json(err);
    } else {
      res.status(200).json({ message: "Email sent successfuly " });
      const Status = new Status({
        status: true,
      });
      Status.save();
    }
  });
};

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

module.exports = {
  getAccounts,
  createAccount,
  ConfirmationEmail,
  updateAccount,
  deleteAccount,
};
