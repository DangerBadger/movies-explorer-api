const { Error } = require('mongoose');
const Movie = require('../models/movie');
const STATUS = require('../utils/constants/status');
const BadRequest = require('../utils/errors/badRequest');

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const owner = req.user._id;

  Movie.create({ ...req.body, owner })
    .then((movie) => {
      res.status(201).send(movie);
    })
    .catch((err) => {
      if (err instanceof Error.ValidationError) {
        next(new BadRequest(STATUS.INVALID_MOVIE_CREATE));
      } else {
        next(err);
      }
    });
};
