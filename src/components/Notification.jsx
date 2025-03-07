import React, { useEffect, useState } from 'react'
// import { db } from "../Firebase";
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { Box, LinearProgress } from '@mui/material';
function Notification() {
    const [notification, setNotification] = useState([])
    const [linearLoading, setLinearLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const userId = localStorage.getItem("userId");
            if (!userId) return;
            setLinearLoading(true);
            try {
                const userRef = doc(db, "saveProduct", userId);
                const userSnapshot = await getDoc(userRef);

                if (userSnapshot.exists()) {
                    const userData = userSnapshot.data();

                    // Extract notifications safely
                    const notifications = userData.products
                        .map((product) => product.notifications || []) // Ensure it's an array
                        .flat();

                    // console.log(notifications); // Logs all notifications from all products
                    setNotification(notifications)

                    // setData(notifications); // Uncomment if you want to store them in state
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLinearLoading(false);
            }
        };

        fetchData();
    }, []);


    if (linearLoading)
        return (
            <Box sx={{ width: '100%', position: "fixed", top: 0, left: 0 }}>
                <LinearProgress sx={{ backgroundColor: "white", "& .MuiLinearProgress-bar": { backgroundColor: "#16A085" } }} />
            </Box>
        );

    if (notification.length == 0)
        return (
            <p className="text-center text-gray-600">No new notifications found.</p>)
    return (
        <div className="w-[97%] mx-auto px-2 py-1.5">
            <h2 className="text-xl font-semibold text-amber-50 mb-4">🔔 Notifications</h2>
            <div className="space-y-4">
                <AnimatePresence>
                    {notification
                        .filter((noti) => noti.timestamp) // Remove invalid notifications 
                        .sort((a, b) => b.timestamp - a.timestamp) // Sort by newest first
                        .map((notification, index) => (
                            <motion.div
                                key={notification.timestamp || index}
                                // initial={{ opacity: 0, y: 50 }} // Slide-in from the right
                                // animate={{ opacity: 1, x: 0 }} // Fade-in and settle
                                // exit={{ opacity: 0, x: -50, scale: 0.9 }} // Shrink and slide out left
                                // transition={{ duration: 0.5, ease: "easeInOut" }}
                                // whileHover={{ scale: 1.02, boxShadow: "0px 8px 20px rgba(0,0,0,0.12)" }} // Elegant hover effect
                                className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-[#16A085] cursor-pointer transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-800">Product - {notification.product.slice(0, 33)}......</h3>
                                <p className="text-gray-600">{notification.message}</p>
                                <small className="text-gray-400">
                                    {new Date(notification.timestamp).toLocaleString()}
                                </small>
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>
        </div>
    );

}

export default Notification