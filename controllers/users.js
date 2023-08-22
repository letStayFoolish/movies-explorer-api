const User = require('../models/user')
const BadRequest400= require('../error-handlers/bad-request-400')
const NotFound404 = require('../error-handlers/not-found-404')
// Get Current User
const getCurrentUser = (req, res, next) => {
  const userId = req.user._id

  return User.findById(userId)
    .then((user) => {
      if (!user) {
        // Status 404:
        throw new NotFound404(`Пользователь по указанному id: ${userId} не найден.`)
      }
      // Status 200:
      res.json(user)
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        // Status 400:
        return next(new BadRequest400('Указан некорректный id.'))
      }
      // Status 500:
      return next(error)
    })
}

const updateUser = (req, res, next) => {
  const { name, email } = req.body
  const updData = {
    name,
    email,
  }
  const userId = req.user._id
  return User.findByIdAndUpdate(userId, updData, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        // Status 404:
        throw new NotFound404(`Пользователь с указанным id: ${userId} не найден.`)
      }
      // Status 200:
      res.send(user)
    })
    .catch((error) => {
      // Status 400:
      if (error.name === 'ValidationError') {
        return next(new BadRequest400('Переданы некорректные данные при обновлении профиля.'))
      }
      // Status 500:
      return next(error)
    })
}


module.exports = { getCurrentUser, updateUser }