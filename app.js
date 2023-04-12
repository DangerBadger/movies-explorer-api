const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const limiter = require('./utils/limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, MOVIES_EXPLORER_CONNECT } = require('./config');
const routes = require('./routes');
const errorHendler = require('./middlewares/errorHandler');

// Подключение express
const app = express();

// Коннект БД по значению переменной окружения
mongoose.connect(MOVIES_EXPLORER_CONNECT);

// Ограничение на количество запросов
app.use(limiter);

// Автоматическая простановка заголовков безопасности
app.use(helmet());

// Распознаёт объект запроса как JSON
app.use(express.json());
// Данные в полученном объекте body могут быть любых типов
app.use(express.urlencoded({ extended: true }));

// Парсинг кук
app.use(cookieParser());

// Логгер запросов
app.use(requestLogger);

// Направление по всем рутам
app.use(routes);

// Логгер ошибок
app.use(errorLogger);

// Централизованный обработчик ошибок
app.use(errorHendler);

// Сигнал о прослушке порта
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
