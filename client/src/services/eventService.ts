import axios from "axios";
import { Event } from "../types/Calendar.types";
import moment from "moment";
const apiUrl = import.meta.env.VITE_REACT_APP_URI || "http://localhost:5000";

const api = axios.create({
    baseURL: apiUrl
})

const fetchEvents = async () => {
    const response = await api.get("/events");

    const events = response.data.map((event: Event) => {
        return {
            ...event,
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate()
        }
    })

    return events
}

const addEvent = async (newEvent: Event) => {
    const response = await api.post("/events", newEvent);
    return response.data
}

const updateEvent = async (event: Event) => {
    console.log('event', event)
    const response = await api.put(`/events/${event._id}`, event);
    return response.data
}

export default { fetchEvents, addEvent, updateEvent }