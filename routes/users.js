const router = require('express').Router();
const { celebrate, Joi } = require('celebrate')


// Import controllers:
const { getCurrentUser, updateUser } = require('../controllers/users')
// GET User Me
router.get('/me', getCurrentUser);
router.patch('/me', updateUser);



module.exports = router
