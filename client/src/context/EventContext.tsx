import { createContext, useEffect, useState } from 'react'
import { Event } from '../types/Calendar.types'
import eventService from '../services/eventService'

export const EventContext = createContext<{
    events: Event[],
    // setEvents: React.Dispatch<React.SetStateAction<Event[]>>,
    addEvent: (event: Event) => void,
    updateEvent: (event: Event) => void
}>({
    events: [],
    // setEvents: () => { },
    addEvent: () => { },
    updateEvent: () => { }
})

export const EventProvider = ({ children }: { children: React.ReactNode }) => {
    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        const fetch = async () => {
            const events = await eventService.fetchEvents();
            setEvents(events);
        };
        fetch();
    }, []);


    const addEvent = (event: Event) => {
        setEvents([...events, event])
        eventService.addEvent(event)
    }

    const updateEvent = (event: Event) => {
        setEvents(events.map(e => e._id === event._id ? event : e))
        eventService.updateEvent(event)
    }

    return (
        <EventContext.Provider value={{ events, addEvent, updateEvent }}>
            {children}
        </EventContext.Provider>
    )
}
