import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import UI from '../components/UI'

function Dashboard() {
    return (
        <div className='w-full h-screen flex gap-2.5' style={{
            backgroundColor: "var(--background-color)"
        }}>
            <Sidebar />
            <UI />
        </div>
    )
}

export default Dashboard