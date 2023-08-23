const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.clearCookie('jwt').send({ message: 'Выход' })
})

module.exports = router
