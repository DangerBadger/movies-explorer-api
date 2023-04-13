// Подключение библиотеки для чтения переменных окружения из .env
require('dotenv').config();

const {
  PORT = 3000,
  MOVIES_EXPLORER_CONNECT = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  JWT_SECRET = 'secret-key',
} = process.env;

module.exports = {
  PORT,
  MOVIES_EXPLORER_CONNECT,
  JWT_SECRET,
};
