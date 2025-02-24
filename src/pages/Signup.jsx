import React, { useEffect } from 'react'
import InputField from '../ui/InputField'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'
import { useProvider } from '../components/PostProvider';

function Signup() {
    const { username, email, password, dispatch } = useProvider();

    const handleSignup = async () => {
        if (!username.trim() || !email.trim() || !password.trim()) {
            alert('Please fill all fields');
            return;
        }
        try {
            const response = await fetch('https://amazon-price-tracker-backend-y6z2.onrender.com/api/v1/auth/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            })
            const data = await response.json();
            if (response.ok) {
                alert('Signup successful');
                dispatch({ type: 'USERNAME', user: '' });
                dispatch({ type: 'EMAIL', userEmail: '' });
                dispatch({ type: 'PASSWORD', pass: '' });
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form action='' className='w-[350px] h-auto rounded-lg px-4 py-2.5 flex flex-col justify-center align-items-center text-center shadow-2xl' style={{
            backgroundColor: "var(--background-color)",
        }}>
            <div className="h-40 w-full flex flex-col justify-center items-center">
                <h1>SIGNUP</h1>
                <p>Already have an account yet?
                    <Link to='/login'> Login</Link>
                </p>
            </div>
            <InputField type="username" value={username} onChange={(e) => dispatch({ type: 'USERNAME', user: e.target.value })} placeholder="username" />
            <InputField type="email" value={email} onChange={(e) => dispatch({ type: 'EMAIL', userEmail: e.target.value })} placeholder="email" />
            <InputField type="password" value={password} onChange={(e) => dispatch({ type: 'PASSWORD', pass: e.target.value })} placeholder="Password" />
            <Button onClick={handleSignup}>Sign up</Button>
        </form>
    )
}

export default Signup