const { Error } = require('mongoose');
const Movie = require('../models/movie');
const STATUS = require('../utils/constants/status');
const BadRequest = require('../utils/errors/badRequest');
const NotFound = require('../utils/errors/notFound');
const Forbidden = require('../utils/errors/forbidden');

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .populate('owner')
    .then((movies) => {
      res.send(movies);
    })
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
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

module.exports.deleteMovie = (req, res, next) => {
  const movieId = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFound(STATUS.MOVIE_NOT_FOUND);
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new Forbidden(STATUS.FORBIDDEN_CARD);
      }
      return Movie.deleteOne({ _id: movieId })
        .then(() => {
          res.send({ message: 'Фильм удалён' });
        });
    })
    .catch((err) => {
      if (err instanceof Error.CastError) {
        next(new BadRequest(STATUS.BAD_REQUEST));
      } else {
        next(err);
      }
    });
};
