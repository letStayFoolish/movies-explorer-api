const bcrypt = require('bcrypt');
const User = require('../models/user');
const RequestConflict409 = require('../error-handlers/request-conflict-409');
const BadRequest400 = require('../error-handlers/bad-request-400');

const createUser = (req, res, next) => {
  const { email, password, name } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email, password: hash, name,
    }))
  // Status 201:
    .then((user) => res.status(201).json({
      name: user.name,
      email: user.email,
    }))
    .catch((error) => {
      // Status 409:
      if (error.code === 11000) {
        return next(new RequestConflict409('Пользователь с таким емайлом уже существует'));
      }
      // Status 400:
      if (error.name === 'ValidationError') {
        return next(new BadRequest400());
      }
      // Status 500:
      return next(error);
    });
};

module.exports = { createUser };
