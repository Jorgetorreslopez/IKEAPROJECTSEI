const express = require('express');
const router = express.Router()
const ordersCtrl = require('../../controllers/api/orders')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/cart', ordersCtrl.cart)
router.get('/history', ensureLoggedIn, ordersCtrl.history)
router.post('/cart/items/:id', ordersCtrl.addToCart)
router.post('/cart/checkout', ensureLoggedIn, ordersCtrl.checkout)
router.put('/cart/qty', ordersCtrl.setItemQtyInCart)

module.exports = router