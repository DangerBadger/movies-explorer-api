const router = require('express').Router();
const { getUserInfo, updateUser, signOut } = require('../controllers/user');
const { infoUpdateValidation } = require('../middlewares/validation/userValidator');

router.get('/me', getUserInfo);
router.patch('/me', infoUpdateValidation, updateUser);
router.post('/signout', signOut);

module.exports = router;
