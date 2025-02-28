import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfileImage from "../assets/images/download (1).jfif"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';
function User() {
    return (
        <div className="w-[86px] h-[29px] flex gap-2.5 items-center">
            <IconButton className='relative'>
                <div className="absolute w-[7px] h-[7px] rounded-full top-1 right-1.5 bg-red-700"></div>
                <NotificationsIcon className='text-gray-500' />
            </IconButton>
            <img src={ProfileImage} alt="Profile Image" className="w-[24px] h-[23px] rounded-full" />
            <KeyboardArrowDownIcon />
        </div>
    )
}

export default User