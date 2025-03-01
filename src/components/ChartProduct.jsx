import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ChartProduct = () => {
    const data = [
        { name: "Jan", points: 4000 },
        { name: "Feb", points: 3000 },
        { name: "Mar", points: 5000 },
        { name: "Apr", points: 7000 },
    ];

    // Fade-in state
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300); // Delay fade-in
    }, []);

    return (
        <motion.div
            className="bg-gray-900 p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#ddd" />
                    <YAxis stroke="#ddd" />
                    <Tooltip contentStyle={{ backgroundColor: "#333", borderRadius: "8px", color: "#fff" }} />
                    <Line type="monotone" dataKey="points" stroke="#00c3ff" strokeWidth={3} dot={{ r: 6, fill: "#00c3ff" }} />
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default ChartProduct;
