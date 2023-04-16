const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movie');
const { createValidation, movieIdValidation } = require('../middlewares/validation/movieValidator');

router.get('/', getMovies);
router.post('/', createValidation, createMovie);
router.delete('/:_id', movieIdValidation, deleteMovie);

module.exports = router;
