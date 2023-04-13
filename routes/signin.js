const router = require('express').Router();
const { loginUser } = require('../controllers/user');

router.post('/', loginUser);

module.exports = router;
