const Event = require('../model/event')

exports.createEvent = async (req, res) => {
    const { startDate, endDate, description } = req.body

    if (!startDate || !endDate || !description) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    try {
        const event = new Event({
            startDate,
            endDate,
            description
        })
        await event.save()
        res.status(201).json({ message: 'Event created successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find({})
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}