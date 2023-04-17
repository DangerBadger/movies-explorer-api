const router = require('express').Router();
const { getUserInfo, updateUser } = require('../controllers/user');
const { infoUpdateValidation } = require('../middlewares/validation/userValidator');

router.get('/me', getUserInfo);
router.patch('/me', infoUpdateValidation, updateUser);

module.exports = router;
