// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
    const [userId, setUserId] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleLogin = () => {
        if (userId === 'user' && pass === 'pass') {
            login(userId, pass);
            navigate('/home');
            setError('')
        } else if (!userId || !pass) {
            setError('User ID or Password cannot be empty.')
        } else {
            setError('Invalid User ID or Password.')
        }

    };

    return (
        <div>
            <h2>Login Page</h2>
            <div>
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) =>
                        setUserId(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) =>
                        setPass(e.target.value)}
                />
            </div>
            <div style={{ color: "red" }}>{error}</div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;