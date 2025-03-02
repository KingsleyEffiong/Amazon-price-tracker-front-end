import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import UI from '../components/UI'
import Modal from '../ui/Modal'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div className='w-full h-screen flex gap-2.5' style={{
            backgroundColor: "var(--background-color)"
        }}>
            <Sidebar />
            <Outlet />
            <Modal />
        </div>
    )
}

export default Dashboard