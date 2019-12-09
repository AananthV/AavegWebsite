const express = require('express')
const router = express.Router()
const eventsController = require('../controllers/eventsController.js')

router.get('/admin/events/create', eventsController.createEventForm)
router.get('/admin/events/edit/:id/', eventsController.editEventForm)
router.post('/admin/events', eventsController.validate, eventsController.saveEventData)
router.delete('/admin/events/:id', eventsController.deleteEventData)
router.put('/admin/events/:id', eventsController.validate, eventsController.editEventData)

router.get('/events', eventsController.showEventsPage)
router.get('/events/:id', eventsController.showEvent)
//API
router.get('/api/events', eventsController.apiEvents)
router.get('/api/events/:id', eventsController.validateJWT,eventsController.apiEventData)
router.delete('/api/events/:id', eventsController.apiDeleteEventData)

module.exports = router
