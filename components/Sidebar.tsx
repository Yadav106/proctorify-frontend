import React, {use, useState} from 'react';
import styles from './Sidebar.module.css'; 
import { FaHome, FaCalendar, FaVideo, FaArchive, FaCog } from 'react-icons/fa';
import { GiVideoConference } from "react-icons/gi";
import { BsArrowLeftShort, BsChevronDown } from 'react-icons/bs';
// interface SidebarProps {
//   isOpen: boolean; 
// }

const Sidebar = () => {

  const [ open, setOpen] = useState(true);
  const [subRooms, setSubRooms] = useState(false);
  const [subRoomsAdmin, setSubRoomsADmin] = useState(false);

  const menuItems = [
    { name: 'Home', icon: <FaHome />, id: 1 },
    // { name: 'Calendar', icon: <FaCalendar />, id: 2 },
    { name: 'Rooms', icon: <FaVideo />, id: 3, spacing: true, sub: [{title: "hello"}, {title: "hello"}, {title: "hello"}]  }, 
    { name: 'Rooms with you as admin', icon: <FaVideo />, id: 4, sub: [{title: "dead"}, {title: "dead"}, {title: "dead"}] }, 
    // { name: 'Archived Rooms', icon: <FaArchive />, id: 5, spacing: true  },
    { name: 'Settings', icon: <FaCog />, id: 6 },
  ];



  return (
    <div       
      className={`bg-blue-500 h-screen ${open? "w-72" : "w-20"} p-5 pt-8 duration-300 relative`}>
      <BsArrowLeftShort onClick = {() => setOpen(!open)} className={`bg-white text-blue-800 text-3xl rounded-full absolute -right-3 top-7 border border-blue-800 cursor-pointer ${!open && "rotate-180"} `} />
      <div className='inline-flex' >
        <GiVideoConference className={`bg-white text-4xl rounded text-blue-500 cursor-pointer block float-left mr-3 duration-500 ${open && "rotate-[360deg]"} `} />
        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"} `}>Proctorify</h1>
      </div>

      <ul className='pt-2 '>
        {menuItems.map((menu) => (
          <>
            <li key={menu.id} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-2 `} >

              <span className='text-2xl block float-left'>
                {menu.icon} 
              </span>
              <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"} `}>{menu.name}</span>
              
              {menu.sub && (
                <BsChevronDown className={`${(menu.id ===3 ? subRooms : subRoomsAdmin) && "rotate-180"}`} onClick={() => { menu.id===3 ? setSubRooms(!subRooms) : setSubRoomsADmin(!subRoomsAdmin)}} />
              )}

            </li>

            {menu.sub && subRooms && open && (
              <ul>
                {menu.sub.map((subItem, index) => (
                  <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md'>
                    {subItem.title}
                  </li>
                ))}
              </ul>
            )}

            {menu.sub && subRoomsAdmin && open &&(
              <ul>
                {menu.sub.map((subItem, index) => (
                  <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md'>
                    {subItem.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
