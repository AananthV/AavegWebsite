const express = require('express')
const router = express.Router()
const sponsorController = require('../controllers/sponsorController.js')

router.get('/sponsors', sponsorController.getSponsors)

module.exports = router
