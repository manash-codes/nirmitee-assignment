const express = require('express');
const router = express.Router();

const { getEvents, createEvent } = require('../controller/event')

router.get('/', getEvents)
router.post('/', createEvent)

module.exports = router