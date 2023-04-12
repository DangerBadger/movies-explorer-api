const { Error } = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const STATUS = require('../utils/constants/status');
const BadRequest = require('../utils/errors/badRequest');
const Conflict = require('../utils/errors/conflict');

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
    .catch
};
