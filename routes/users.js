const express = require('express');
const router = express.router();
const {checkToken, dataController, apiController } = require('../controllers/api/users')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/', dataController.create, apiController.auth)

router.post('/login', dataController.login, apiController.auth)

router.get('/check-token', ensureLoggedIn, checkToken)

router.put('/:id', dataController.update, apiController.auth)

module.exports = router