import React, { useEffect, useState } from 'react'
import InputField from '../ui/InputField'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'
import { useProvider } from '../components/PostProvider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2'
import Loader from "../assets/images/Triple intersection.gif"

const SIGNUP_URL = import.meta.env.VITE_SIGNUP_URL;

function Signup() {
    const { username, email, password, dispatch } = useProvider();
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)



    const handleSignup = async () => {
        if (!username.trim() || !email.trim() || !password.trim()) {
            alert('Please fill all fields');
            return;
        }
        try {
            const response = await fetch(`${SIGNUP_URL}`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            })
            const data = await response.json();
            console.log(data)
            if (response.ok) {
                alert('Signup successful');
                dispatch({ type: 'USERNAME', user: '' });
                dispatch({ type: 'EMAIL', userEmail: '' });
                dispatch({ type: 'PASSWORD', pass: '' });
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }
    return (
        <form action='' className='w-[350px] h-auto rounded-lg px-4 py-2.5 flex flex-col justify-center align-items-center text-center shadow-2xl shadow-[#afa1a1]' style={{
            backgroundColor: "var(--background-color)",
        }}>
            <div className="h-40 w-full flex flex-col justify-center items-center relative">
                <h1>SIGNUP</h1>
                <p>Already have an account?
                    <Link to='/login' className='underline'> Login</Link>
                </p>
            </div>
            <div className="relative">
                <InputField type="username" value={username} onChange={(e) => dispatch({ type: 'USERNAME', user: e.target.value })} placeholder="username" />
                <AccountCircleIcon className='absolute left-2 top-4' />
            </div>
            <div className="relative">
                <EmailIcon className='absolute left-2 top-4' />
                <InputField type="email" value={email} onChange={(e) => dispatch({ type: 'EMAIL', userEmail: e.target.value })} placeholder="email" />
            </div>
            <div className="relative">
                <EnhancedEncryptionIcon className="absolute left-2 top-4" />
                <InputField
                    type={visible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => dispatch({ type: 'PASSWORD', pass: e.target.value })}
                    placeholder="Password"
                />
                <div>
                    {visible ? (
                        <RemoveRedEyeIcon
                            className="absolute right-2 top-4 cursor-pointer"
                            onClick={() => setVisible(false)}
                        />
                    ) : (
                        <VisibilityOffIcon
                            className="absolute right-2 top-4 cursor-pointer"
                            onClick={() => setVisible(true)}
                        />
                    )}
                </div>
            </div>

            <Button onClick={handleSignup}>
                <img src={Loader} className='w-10' alt="" />
            </Button>
        </form>
    )
}

export default Signup