const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    startDate: String,
    endDate: String,
    title: String
});

module.exports = mongoose.model('events', eventSchema)