const BaseError = require('./baseError');

class Conflict extends BaseError {
  constructor(message) {
    super(409, message);
  }
}

module.exports = Conflict;
