const express = require('express')
const router = express.Router()
const itemsCtrl = require('../../controllers/api/items')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', itemsCtrl.index)
router.get('/favorites', ensureLoggedIn, itemsCtrl.getFavorites)
router.post('/favorites/:id', ensureLoggedIn, itemsCtrl.addToFavorites)
router.get('/:id', itemsCtrl.show)
router.delete('/favorites/:id', ensureLoggedIn, itemsCtrl.removeFromFavorites)



module.exports = router