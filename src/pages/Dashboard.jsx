import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import UI from '../components/UI'
import Modal from '../ui/Modal'
import { Outlet, useNavigate } from 'react-router-dom'


const USER_URL = import.meta.env.VITE_USER_PROFILE;
function Dashboard() {
    const navigate = useNavigate()
    const fetchUser = async () => {
        const token = sessionStorage.getItem("session");
        try {
            const response = await fetch(
                `${USER_URL}/67c7452a5af2857d004e2a94`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`, // ✅ Add token here
                    }
                }
            );

            if (!response.ok) {
                navigate('/login');
                throw new Error(`Failed to fetch user: ${response.status}`);
            }

            const data = await response.json();
            console.log("User Data:", data);
        } catch (error) {
            console.error("User Fetch Error:", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);


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