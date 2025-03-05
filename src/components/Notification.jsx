import React, { useEffect, useState } from 'react'
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
function Notification() {
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const userId = "IMUsOc7b4IzhNmmixtPG";
            if (!userId) return;
            setLoading(true);
            try {
                const userRef = doc(db, "saveProduct", userId);
                const userSnapshot = await getDoc(userRef);

                if (userSnapshot.exists()) {
                    const userData = userSnapshot.data();

                    // Extract notifications safely
                    const notifications = userData.products
                        .map((product) => product.notifications || []) // Ensure it's an array
                        .flat(); // Flatten the array to merge all notifications

                    // console.log(notifications); // Logs all notifications from all products
                    setNotification(notifications)

                    // setData(notifications); // Uncomment if you want to store them in state
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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