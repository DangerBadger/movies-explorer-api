const STATUS = require('../utils/constants/status');

// Централизованный обработчик ошибок
module.exports = ((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500
      ? STATUS.DEFAULT_ERROR
      : message,
  });
  next();
});
