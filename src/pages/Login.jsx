import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../ui/InputField'
import Button from '../ui/Button'
import { useProvider } from '../components/PostProvider'

function Login() {
    const { email, password, dispatch } = useProvider();
    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            alert('Please fill all fields');
            return;
        }
        try {
            const response = await fetch('https://amazon-price-tracker-backend-y6z2.onrender.com/api/v1/auth/sign-in', {
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
        <form action='' className='w-[350px] h-auto rounded-lg px-4 py-2.5 flex flex-col justify-center align-items-center text-center shadow-2xl' style={{
            backgroundColor: "var(--background-color)",
        }}>
            <div className="h-40 w-full flex flex-col justify-center items-center">
                <h1>LOGIN</h1>
                <p>Dont have an account yet?
                    <Link to='/sign-up'> Sign up</Link>
                </p>
            </div>
            <InputField type="email" value={email} onChange={(e) => dispatch({ type: 'EMAIL', userEmail: e.target.value })} placeholder="email" />
            <InputField type="password" value={password} onChange={(e) => dispatch({ type: 'PASSWORD', pass: e.target.value })} placeholder="Password" />
            <Button onClick={handleLogin}>Login</Button>
        </form>
    )
}

export default Login