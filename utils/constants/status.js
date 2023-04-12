const STATUS = {
  INVALID_USER: 'Переданы некорректные данные при создании пользователя',
  CONFLICT_EMAIL: 'Пользователь с данным email уже зарегистрирован',
  NOT_FOUND: 'Запрашиваемый ресурс не найден',
  UNAUTHORIZED_MAIL_PASSWORD: 'Неправильные почта или пароль',
};

module.exports = STATUS;
