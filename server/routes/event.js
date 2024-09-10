const express = require('express');
const router = express.Router();

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controller/event')

router.get('/', getEvents)
router.post('/', createEvent)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)

module.exports = router