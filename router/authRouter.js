const router = require('express').Router();
const { authController } = require('../controller');
const { verifyToken } = require('../lib/jwt');

router.post('/login', authController.login);
router.get('/verify', verifyToken, authController.verify);

module.exports = router;
