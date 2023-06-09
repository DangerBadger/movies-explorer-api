const router = require('express').Router();
const auth = require('../middlewares/auth');
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const signoutRoutes = require('./signout');
const signupRoutes = require('./signup');
const signinRoutes = require('./signin');
const STATUS = require('../utils/constants/status');
const NotFound = require('../utils/errors/notFound');

// Приватные пути
router.use('/users', auth, usersRoutes);
router.use('/movies', auth, moviesRoutes);
router.use('/signout', auth, signoutRoutes);

// Публчиные пути
router.use('/signup', signupRoutes);
router.use('/signin', signinRoutes);

// Обработка любого несуществующего рута
router.use('*', auth, (req, res, next) => next(new NotFound(STATUS.NOT_FOUND)));

module.exports = router;
