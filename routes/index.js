const router = require('express').Router();
const signupRoutes = require('./signup');
const STATUS = require('../utils/constants/status');
const NotFound = require('../utils/errors/notFound');

// Публчиные пути
router.use('/signup', signupRoutes);

// Обработка любого несуществующего рута
router.use('*', (req, res, next) => next(new NotFound(STATUS.NOT_FOUND)));

module.exports = router;
