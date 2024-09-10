import { useContext } from "react"
import { EventContext } from "../context/EventContext"
import moment from "moment"
import { MdCancel } from "react-icons/md";


const EventList = () => {
    const { events, deleteEvent } = useContext(EventContext)

    const handleDeleteEvent = (id: string) => {
        deleteEvent(id)
    }

    return (
        <div className="p-4">
            <div className="flex gap-2 flex-wrap">
                {events.map(event => (
                    <div className="bg-neutral-100 p-4 rounded-lg" key={event._id}>
                        <div className="flex justify-between">
                            <p className="text-xl">{event.title}</p>
                            <button onClick={() => handleDeleteEvent(event._id)} className="hover:text-red-400">
                                <MdCancel />
                            </button>
                        </div>
                        {moment(event.start).format('DD MMM h:mm A')} to {moment(event.end).format('DD MMM h:mm A')}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventList
