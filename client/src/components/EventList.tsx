import { useContext } from "react"
import { EventContext } from "../context/EventContext"
import moment from "moment"

const EventList = () => {
    const { events } = useContext(EventContext)

    return (
        <div className="p-4">
            <div className="flex gap-2 flex-wrap">
                {events.map(event => (
                    <div className="bg-neutral-100 p-4 rounded-lg" key={event._id}>
                        <p className="text-xl">{event.title}</p>
                        {moment(event.start).format('DD MMM h:mm A')} to {moment(event.end).format('DD MMM h:mm A')}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventList
