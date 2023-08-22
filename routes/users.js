const router = require('express').Router();
const { celebrate, Joi } = require('celebrate')

// Import controllers:
const { getCurrentUser, updateUser } = require('../controllers/users')
// GET: Current User
router.get('/me', getCurrentUser);
// POST: Update User's name and email
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email()
  })
}), updateUser);

module.exports = router
