const router = require('express').Router();
const { signOut } = require('../controllers/user');

router.post('/', signOut);

module.exports = router;
