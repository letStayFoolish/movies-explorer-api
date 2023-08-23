const router = require('express').Router();
const {URL_REGEX} = require('../utils/regex')
const {celebrate, Joi} = require('celebrate')
const {getMovies, addMovieToFavorites, deleteMovieFromFavorites} = require('../controllers/movies')
// GET: Movies From user's Favorites
router.get('/', getMovies)
// POST: Add Movie To Favorites
router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(URL_REGEX),
    trailerLink: Joi.string().required().pattern(URL_REGEX),
    thumbnail: Joi.string().required().pattern(URL_REGEX),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), addMovieToFavorites)
// DELETE: Remove Movie From Favorites
router.delete('/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex().required()
  })
}), deleteMovieFromFavorites)


module.exports = router
