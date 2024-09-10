import { useContext, useState } from "react"
import { EventContext } from "../context/EventContext"
import { useModal } from "../context/ModalContext"

const AddEvent = () => {
    const [title, setTitle] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const { addEvent } = useContext(EventContext)
    // const {closeModal} = useContext(ModalContext)
    const { closeModal } = useModal()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addEvent({
            title,
            start: new Date(start).toString(),
            end: new Date(end).toString()
        })
        closeModal()
        setTitle('')
        setStart('')
        setEnd('')
    }

    return (
        <div className="p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="w-full max-w-sm min-w-[200px]">
                    <label>Title</label>
                    <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Add Title" />
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                    <label>Start</label>
                    <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="datetime-local" value={start} onChange={e => setStart(e.target.value)} />
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                    <label>End</label>
                    <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="datetime-local" value={end} onChange={e => setEnd(e.target.value)} />
                </div>
                <button className="rounded-md bg-primary-200 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-primary-100 focus:shadow-none active:bg-primary-100 hover:bg-primary-100 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="submit">
                    Add Event
                </button>
            </form>
        </div>
    )
}

export default AddEvent;