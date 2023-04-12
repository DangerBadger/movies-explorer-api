// Подключение библиотеки для чтения переменных окружения из .env
require('dotenv').config();

const { PORT = 3000 } = process.env;
const { MOVIES_EXPLORER_CONNECT = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

module.exports = {
  PORT,
  MOVIES_EXPLORER_CONNECT,
};
