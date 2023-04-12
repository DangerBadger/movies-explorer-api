const BaseError = require('./baseError');

class BadRequest extends BaseError {
  constructor(message) {
    super(400, message);
  }
}

module.exports = BadRequest;
