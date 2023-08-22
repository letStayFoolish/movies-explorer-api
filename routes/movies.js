const router = require('express').Router();
const { celebrate, Joi } = require('celebrate')

const { getMovies, addMovieToFavorites, deleteMovieFromFavorites } = require('../controllers/users')
// GET: Movies From user's Favorites
router.get('/', getMovies)
// POST: Add Movie To Favorites
router.post('/', addMovieToFavorites)
// DELETE: Remove Movie From Favorites
router.delete('/:movieId', deleteMovieFromFavorites)


module.exports = router
