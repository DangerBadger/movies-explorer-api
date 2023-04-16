const BaseError = require('./baseError');

class Forbidden extends BaseError {
  constructor(message) {
    super(403, message);
  }
}

module.exports = Forbidden;
