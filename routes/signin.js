const router = require('express').Router();
const { loginUser } = require('../controllers/user');
const { loginValidation } = require('../middlewares/validation/userValidator');

router.post('/', loginValidation, loginUser);

module.exports = router;
