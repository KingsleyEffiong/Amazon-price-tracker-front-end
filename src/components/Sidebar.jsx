import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SegmentIcon from '@mui/icons-material/Segment';
import { IconButton } from '@mui/material';
function Sidebar() {
    const [toggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle((prev) => !prev);
    }
    return (
        <div className={`${toggle ? 'w-[60px]' : 'w-[260px]'}  h-full border-r border-r-[#2C2D33] relative`}>
            <IconButton className='fixed top-1.5 left-1 text-[#16A085] ' onClick={handleToggle}>
                <SegmentIcon className='bg-[#16A085] rounded-sm' sx={{ fontSize: 30 }} />
            </IconButton>
            <ul className="flex flex-col justify-center gap-10 items-start mt-32">
                <li className={`flex gap-3 items-center px-3 py-7 rounded-l cursor-pointer shadow-lg shadow-[black] 
        transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#0a2c24] hover:bg-[#12876D]
        ${toggle ? 'bg-transparent border-r border-r-[#16A085] min-w-[50px]' : 'bg-[#16A085] min-w-full rounded-full '}`
                }>
                    <DashboardIcon className="transition-transform duration-500 ease-in-out" />
                    <p className={`transition-[opacity,max-width] duration-500 ease-in-out overflow-hidden 
            ${toggle ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[200px]'}`}>
                        Dashboard
                    </p>
                </li>

                <li className={`flex gap-3 items-center px-3 py-7 rounded-l cursor-pointer shadow-lg shadow-[black] 
        transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#0a2c24] hover:bg-[#12876D]
        ${toggle ? 'bg-transparent border-r border-r-[#16A085] min-w-[50px]' : 'bg-[#16A085] min-w-full rounded-full'}`
                }>
                    <NotificationsIcon className="transition-transform duration-500 ease-in-out" />
                    <p className={`transition-[opacity,max-width] duration-500 ease-in-out overflow-hidden 
            ${toggle ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[200px]'}`}>
                        Notification
                    </p>
                </li>

                <li className={`flex gap-3 items-center px-3 py-7 rounded-l cursor-pointer shadow-lg shadow-[black] 
        transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#0a2c24] hover:bg-[#12876D]
        ${toggle ? 'bg-transparent border-r border-r-[#16A085] min-w-[50px]' : 'bg-[#16A085] min-w-full rounded-full'}`
                }>
                    <SettingsIcon className="transition-transform duration-500 ease-in-out" />
                    <p className={`transition-[opacity,max-width] duration-500 ease-in-out overflow-hidden 
            ${toggle ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[200px]'}`}>
                        Setting
                    </p>
                </li>
            </ul>

        </div>

    )
}

export default Sidebar