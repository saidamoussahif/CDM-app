const express = require('express');
const { Login } = require('../Controllers/adminController');
const { Register } = require('../Controllers/adminController');
const router= express.Router();


router.route('/login').post(Login);
router.route('/register').post(Register);






module.exports = router;