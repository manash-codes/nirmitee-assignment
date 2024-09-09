const express = require('express');
const router = express.Router();

const { getEvents, createEvent, updateEvent } = require('../controller/event')

router.get('/', getEvents)
router.post('/', createEvent)
router.put('/:id', updateEvent)

module.exports = router