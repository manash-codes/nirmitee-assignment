const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    start: String,
    end: String,
    title: String
});

module.exports = mongoose.model('events', eventSchema)