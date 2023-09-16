const express = require('express');
const router = express.Router()
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const { dataController } = require('../../controllers/api/users')

router.post('/', ensureLoggedIn, dataController.profile)


module.exports = router