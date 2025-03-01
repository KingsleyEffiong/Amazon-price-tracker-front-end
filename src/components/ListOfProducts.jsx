import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, CardActions } from "@mui/material";


function ListOfProducts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userId = "Je0KiLVaAFlPBdr8EAiM";
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
                    setData(userData.products || []);
                } else {
                    console.log("User document does not exist.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-1">
            <h2 className="text-2xl font-bold text-center text-white mb-6">Your Tracked Products</h2>
            <div className="gap-6 flex flex-wrap">
                {data.map((product, index) => (
                    <motion.div
                        key={index}
                        className="p-4 rounded-lg bg-transparent"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card
                            sx={{
                                maxWidth: 345,
                                borderRadius: "16px",
                                overflow: "hidden",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"
                                }
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    sx={{
                                        height: 200,
                                        objectFit: "cover",
                                        transition: "opacity 0.3s ease-in-out",
                                        "&:hover": {
                                            opacity: 0.9
                                        }
                                    }}
                                    alt={product.title}
                                />
                                <CardContent className="bg-gradient-to-b from-white to-gray-100 text-[#2C2D33]">
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        className="font-semibold text-lg tracking-wide"
                                    >
                                        {product.title.length > 50 ? `${product.title.slice(0, 50)}...` : product.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="p-3 flex justify-center">
                                <Button
                                    variant="contained"
                                    className="shadow-2xl shadow-black"
                                    sx={{
                                        backgroundColor: '#2C2D33',
                                        borderRadius: "8px",
                                        padding: "10px 20px",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            backgroundColor: "#1E1F23"
                                        },
                                        "&:active": {
                                            transform: "scale(0.95)"
                                        }
                                    }}
                                >
                                    Show Chart
                                </Button>
                            </CardActions>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div >
    );
}

export default ListOfProducts;
