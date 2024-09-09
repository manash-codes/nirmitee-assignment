import axios from "axios";
import { Event } from "../types/Calendar.types";
import moment from "moment";
const apiUrl = "http://localhost:5000";

const api = axios.create({
    baseURL: apiUrl
})

export const fetchEvents = async () => {
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

export const addEvent = async (newEvent: Event) => {
    const response = await api.post("/events", newEvent);
    return response.data
}

export const updateEvent = async (event: Event) => {
    const response = await api.put(`/events/${event._id}`, event);
    return response.data
}