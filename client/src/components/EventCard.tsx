import { Event } from "../types/Calendar.types"

type EventProps = {
    event: Event | undefined
}

const EventCard = ({ event }: EventProps) => {

    if (!event) return null

    return (
        <div className="p-2">
            <p>{event.title}</p>
            <p>{event.start.toString()}</p> - <p>{event.end.toString()}</p>
        </div>
    )
}

export default EventCard