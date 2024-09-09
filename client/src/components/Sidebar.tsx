import { FaTooth } from "react-icons/fa6";
import { RiMenuFold3Line2 } from "react-icons/ri";
import { FaTachometerAlt } from "react-icons/fa";
import { LuCalendarRange } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const items = [
    {
        name: "Overview",
        path: "/overview",
        icon: <FaTachometerAlt />
    },
    {
        name: "Calendar",
        path: "/calendar",
        icon: <LuCalendarRange />
    },
    {
        name: "Patient List",
        path: "/patient-list",
        icon: <IoPerson />
    },
    {
        name: "Messages",
        path: "/messages",
        icon: <TbMessageCircle />
    },
    {
        name: "Payment Information",
        path: "/payment-information",
        icon: <TbMoneybag />
    },
    {
        name: "Settings",
        path: "/settings",
        icon: <LuSettings2 />
    }

]

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const location = useLocation();

    return (
        <div className={`${isOpen ? 'w-72' : 'w-20'} duration-300 h-screen bg-neutral-100`}>
            <div className="flex items-center justify-between gap-2 p-2 py-4">
                <div className="text-5xl text-primary-100">
                    <FaTooth />
                </div>

                {isOpen && <div className="flex-1">
                    <p className="text-2xl font-bold">Zendenta</p>
                    <p className="opacity-40 text-xs tracking-tight">Cabut g gj tanpa saklt</p>
                </div>}

                <p onClick={() => setIsOpen(!isOpen)} className={`text-3xl cursor-pointer opacity-40 ${isOpen ? '' : 'rotate-180'}`}><RiMenuFold3Line2 /></p>
            </div>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index} >
                            <Link to={item.path} key={index} className={`flex items-center gap-2 p-3 my-2
                             hover:bg-primary-100 border-b-8 hover:text-white cursor-pointer
                            ${location.pathname === item.path ? 'bg-primary-100 border-b-primary-200 text-white' : 'border-b-transparent'}`}>
                                <div className={`text-3xl ${isOpen ? 'ps-6' : 'ps-3'}  pe-4 `}>
                                    {item.icon}
                                </div>
                                {isOpen && <p>{item.name}</p>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar