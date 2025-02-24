import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from '../ui/InputField'
import Button from '../ui/Button'
import { useProvider } from '../components/PostProvider'
import EmailIcon from '@mui/icons-material/Email';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Loader from "../assets/images/Triple intersection.gif"


const SIGNIN_URL = import.meta.env.SIGNIN_URL;
function Login() {
    const { email, password, dispatch } = useProvider();
    const [visible, setVisible] = useState(false)
    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            alert('Please fill all fields');
            return;
        }
        try {
            const response = await fetch(`${SIGNIN_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                alert('Login successful');
                dispatch({ type: 'EMAIL', userEmail: '' });
                dispatch({ type: 'PASSWORD', pass: '' });
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <form action='' className='w-[350px] h-auto rounded-lg px-4 py-2.5 flex flex-col justify-center align-items-center text-center shadow-2xl shadow-[#afa1a1]' style={{
            backgroundColor: "var(--background-color)",
        }}>
            <div className="h-40 w-full flex flex-col justify-center items-center">
                <h1>LOGIN</h1>
                <p>Dont have an account yet?
                    <Link to='/sign-up' className='underline'> Sign up</Link>
                </p>
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
            <Button onClick={handleLogin}>
                <img src={Loader} className='w-10' alt="" />
            </Button>
        </form>
    )
}

export default Login