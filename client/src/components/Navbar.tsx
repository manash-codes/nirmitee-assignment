import { useLocation } from "react-router-dom"
import { items } from "./Sidebar"
import { CiCirclePlus } from "react-icons/ci";
import AddEvent from "./AddEvent";
import { useModal } from "../context/ModalContext";

const Navbar = () => {
    const location = useLocation()
    const { openModal } = useModal()
    const currentPageItem = items.find((item) => item.path === location.pathname)

    const addEventHandler = () => {
        openModal(<AddEvent />)
    }

    return (
        <div className="p-4 border-b-2 mb-2 flex justify-between items-center">
            <div className="flex px-2 gap-2 items-center">
                <div className="text-4xl text-primary-100">
                    {currentPageItem?.icon}
                </div>
                <p className="mt-2 text-3xl font-bold">{currentPageItem?.name}</p>
            </div>
            <button onClick={addEventHandler} title="Add Event">
                <CiCirclePlus className="text-4xl text-primary-100 hover:text-primary-200 active:scale-110 rounded-full border-none" />
            </button>
        </div>
    )
}

export default Navbar