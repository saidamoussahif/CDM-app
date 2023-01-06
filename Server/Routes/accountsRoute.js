const express = require('express');
const { getAccounts, createAccount, updateAccount, deleteAccount } = require('./../Controllers/accountsControllers');

const router= express.Router();


router.route('/getAccounts').get(getAccounts);
router.route('/createAccount').post(createAccount);
router.route('/updateAccount/:id').put(updateAccount);
router.route('/deleteAccount/:id').delete(deleteAccount);








module.exports = router;