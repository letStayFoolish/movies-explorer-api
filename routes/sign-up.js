const router = require('express').Router()
const { celebrate, Joi } = require('celebrate')
const { createUser } = require('../controllers/sign-up')

router.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(4),
    name: Joi.string().required().min(2).max(30),
  })
}), createUser)

module.exports = router
