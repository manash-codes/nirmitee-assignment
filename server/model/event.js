const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    description: String
});

module.exports = mongoose.model('events', eventSchema)