const router = require('express').Router();
const { userController } = require('../controller');
const { verifyToken } = require('../lib/jwt');

router.get('/get', verifyToken, userController.getUsers);
router.get('/get/:id', verifyToken, userController.getUserById);
router.post('/post', verifyToken, userController.createUser);
router.put('/put/:id', verifyToken, userController.updateUser);
router.delete('/delete/:id', verifyToken, userController.deleteUser);

module.exports = router;
