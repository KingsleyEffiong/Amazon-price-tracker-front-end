import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// 🔹 Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_lIXtRunIXYAsxWorkoa8Ye-na3q4St0",
    authDomain: "product-price-tracker-2a820.firebaseapp.com",
    projectId: "product-price-tracker-2a820",
    storageBucket: "product-price-tracker-2a820.appspot.com",
    messagingSenderId: "393984202945",
    appId: "1:393984202945:web:2900ee0ab814c2f62f1c40",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ChartProduct = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userId = "XhcRd9KwafZOUIhCwAJt";
            if (!userId) {
                console.warn("No userId found.");
                return;
            }

            console.log("Fetching data...");

            try {
                const userRef = doc(db, "saveProduct", userId);
                const userSnapshot = await getDoc(userRef);

                if (userSnapshot.exists()) {
                    const userData = userSnapshot.data();
                    console.log("Fetched data:", userData);

                    // Ensure prices exist and are an array
                    if (Array.isArray(userData.price)) {
                        setData(userData.price);
                    } else {
                        console.warn("No price history found.");
                        setData([]);
                    }
                } else {
                    console.log("User document does not exist.");
                    setData([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([]); // Reset only on error
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full max-w-3xl mx-auto mt-8 p-5 bg-white shadow-lg rounded-2xl">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
                📈 Amazon Product Price Trend
            </h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stroke="#16A085" fill="#16A085" fillOpacity={0.4} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartProduct;
