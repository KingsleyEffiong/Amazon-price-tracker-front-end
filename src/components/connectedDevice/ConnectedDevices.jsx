import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

function ConnectedDevices() {
    const [devices, setDevices] = useState({});
    const userId = localStorage.getItem('userId');



    useEffect(() => {
        const fetchDevices = async () => {
            if (!userId)
                return (
                    <p>User is not logged in</p>
                )
            const userRef = doc(db, "saveProduct", userId);
            const docSnap = await getDoc(userRef);

            if (docSnap.exists()) {
                setDevices(docSnap.data().devices || {});
            }
        };

        fetchDevices();
    }, [userId]);

    return (
        <div className="mb-6 w-full">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Last Login</h4>
            <div className="p-4 bg-gray-100 border rounded-md">
                {devices && Object.keys(devices).length > 0 ? (
                    Object.entries(devices).map(([device, lastActive], index) => (
                        <p key={index} className="text-gray-700">
                            {device} - Last Active: {new Date(lastActive).toLocaleString()}
                        </p>
                    ))
                ) : (
                    <p className="text-gray-500">No connected devices found.</p>
                )}
            </div>
        </div>
    );
}

export default ConnectedDevices;
