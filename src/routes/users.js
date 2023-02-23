const express = require('express')
const router = express.Router()
const UsersController = require('../controller/users')

router.post('/login', UsersController.loginUser);
router.post('/send_email', UsersController.sendEmail);

module.exports = router;