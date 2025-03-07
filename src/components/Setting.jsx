import React, { useState } from "react";
import { motion } from "framer-motion";
import ConnectedDevices from "./connectedDevice/ConnectedDevices";
import UserUpdate from "./updateUserProfile/UserUpdate";

function Setting() {
    const [currency, setCurrency] = useState("USD");

    return (
        <motion.div
            className="w-full h-full p-6 overflow-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.h2
                className="text-3xl font-semibold text-white mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                ⚙️ Settings
            </motion.h2>

            <motion.div
                className="max-w-full w-full mx-auto bg-white shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {/* User Preferences */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">User Preferences</h3>

                    {/* Currency Selection */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Preferred Currency</label>
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="w-full p-2 border rounded-md focus:ring focus:ring-[#16A085] outline-none"
                        >
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                            <option value="INR">INR (₹)</option>
                        </select>
                    </div>
                </motion.div>

                {/* Account Management */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">Account Management</h3>
                    <UserUpdate />
                    {/* Connected Devices */}
                    <ConnectedDevices />

                    {/* Logout & Delete Account */}
                    <div className="flex justify-between">
                        <motion.button
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Logout
                        </motion.button>

                        <motion.button
                            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Delete Account
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Setting;
