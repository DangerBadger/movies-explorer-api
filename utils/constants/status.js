const STATUS = {
  INVALID_USER: 'Переданы некорректные данные при создании пользователя',
  CONFLICT_EMAIL: 'Пользователь с данным email уже зарегистрирован',
  NOT_FOUND: 'Запрашиваемый ресурс не найден',
  UNAUTHORIZED_MAIL_PASSWORD: 'Неправильные почта или пароль',
  UNAUTHORIZED_USER: 'Необходима авторизация',
  USER_NOT_FOUND: 'Пользователь по указанному _id не найден',
  INVALID_MOVIE_CREATE: 'Переданы некорректные данные при создании карточки фильма',
};

module.exports = STATUS;
