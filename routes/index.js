const router = require('express').Router();
const signupRoutes = require('./signup');
const signinRoutes = require('./signin');
const STATUS = require('../utils/constants/status');
const NotFound = require('../utils/errors/notFound');

// Публчиные пути
router.use('/signup', signupRoutes);
router.use('/signin', signinRoutes);

// Обработка любого несуществующего рута
router.use('*', (req, res, next) => next(new NotFound(STATUS.NOT_FOUND)));

module.exports = router;
