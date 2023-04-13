const { Error } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const User = require('../models/user');
const STATUS = require('../utils/constants/status');
const BadRequest = require('../utils/errors/badRequest');
const Conflict = require('../utils/errors/conflict');

const { NODE_ENV } = process.env;

// module.exports.getUserInfo = (req, res) => {
//   User.findById(req.user._id)
// };

module.exports.createUser = (req, res, next) => {
  const {
    email,
    password,
    name,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then((user) => {
      const userObj = user.toObject();
      delete userObj.password;
      res.status(201).send(userObj);
    })
    .catch((err) => {
      if (err instanceof Error.ValidationError) {
        next(new BadRequest(STATUS.INVALID_USER));
      } if (err.code === 11000) {
        next(new Conflict(STATUS.CONFLICT_EMAIL));
      } else {
        next(err);
      }
    });
};

module.exports.loginUser = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      const userObj = user.toObject();
      delete userObj.password;
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: false,
      })
        .send(userObj);
    })
    .catch(next);
};
