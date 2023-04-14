const router = require('express').Router();
const { createMovie } = require('../controllers/movie');
// const { infoUpdateValidation } = require('../middlewares/validation/userValidator');

router.post('/', createMovie);

module.exports = router;
