const Event = require('../model/event')

exports.createEvent = async (req, res) => {
    const { start, end, title } = req.body
    console.log(start, end, title)

    if (!start || !end || !title) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    try {
        const event = new Event({
            start,
            end,
            title
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

exports.updateEvent = async (req, res) => {
    const { id } = req.params
    const { start, end, title } = req.body
    if (!start || !end || !title) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try {
        const event = await Event.findByIdAndUpdate(id, {
            start,
            end,
            title
        })

        if (!event) {
            return res.status(404).json({ message: 'Event not found' })
        }
        res.status(200).json({ message: 'Event updated successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteEvent = async (req, res) => {
    const { id } = req.params
    try {
        const event = await Event.findByIdAndDelete(id)
        if (!event) {
            return res.status(404).json({ message: 'Event not found' })
        }
        res.status(200).json({ message: 'Event deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}