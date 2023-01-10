const express = require("express");
const {
  getAccounts,
  createAccount,
  ConfirmationEmail,
  updateAccount,
  deleteAccount,
} = require("./../Controllers/accountsControllers");

const {verifyToken} = require('../Middlewares/Authen')

const router = express.Router();

router.route("/getAccounts").get(verifyToken, getAccounts);
router.route("/createAccount").post(verifyToken, createAccount);
router.route('/confirm/:Email').post(verifyToken,ConfirmationEmail)
router.route("/updateAccount/:id").put(verifyToken, updateAccount);
router.route("/deleteAccount/:id").delete(verifyToken, deleteAccount);



module.exports = router;
