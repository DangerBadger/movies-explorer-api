const BaseError = require('./baseError');

class Unauthorized extends BaseError {
  constructor(message) {
    super(401, message);
  }
}

module.exports = Unauthorized;
