const STATUS = {
  INVALID_USER: 'Переданы некорректные данные при создании пользователя',
  CONFLICT_EMAIL: 'Пользователь с данным email уже зарегистрирован',
  NOT_FOUND: 'Запрашиваемый ресурс не найден',
  UNAUTHORIZED_MAIL_PASSWORD: 'Неправильные почта или пароль',
  UNAUTHORIZED_USER: 'Необходима авторизация',
  USER_NOT_FOUND: 'Пользователь по указанному id не найден',
  INVALID_MOVIE_CREATE: 'Переданы некорректные данные при создании карточки фильма',
  MOVIE_NOT_FOUND: 'Фильм с указанным id не найден',
  FORBIDDEN_CARD: 'У вас нет прав для удаления этого фильма',
  BAD_REQUEST: 'Передан неверный запрос',
  INVALID_INFO_UPDATE: 'Переданы некорректные данные при обновлении профиля',
  DEFAULT_ERROR: 'На сервере произошла ошибка',
};

module.exports = STATUS;
