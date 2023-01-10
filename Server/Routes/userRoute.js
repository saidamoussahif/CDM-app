const express = require('express');
const { Login, Register } = require('../Controllers/userController');
const router= express.Router();


router.route('/register').post(Register);
router.route('/login').post(Login);






module.exports = router;