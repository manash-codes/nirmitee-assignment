import { useLocation } from "react-router-dom"
import { items } from "./Sidebar"
import { CiCirclePlus } from "react-icons/ci";

const Navbar = () => {
    const location = useLocation()

    const currentPageItem = items.find((item) => item.path === location.pathname)

    const addEventHandler = () => {
        console.log('add events')
    }

    return (
        <div className="p-4 border-b-2 mb-2 flex">
            <div className="flex px-2 gap-2 items-center">
                <div className="text-4xl text-primary-100">
                    {currentPageItem?.icon}
                </div>
                <p className="mt-2 text-3xl font-bold">{currentPageItem?.name}</p>
            </div>
            <button className="ml-auto" onClick={addEventHandler} title="Add Event">
                <CiCirclePlus className="text-4xl text-primary-100 hover:text-primary-200 rounded-full border-none" />
            </button>
        </div>
    )
}

export default Navbar