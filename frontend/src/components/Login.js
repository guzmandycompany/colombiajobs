import '../css/Login.css';
import React, { useState } from 'react';
import { loginUser } from '../API';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(username, password);
            setMessage(response.data.message);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
        } catch (error) {
            setMessage(error.response?.data.message || 'Error en el inicio de sesión');
        }
    };

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit}>
                <img className="mb-4" src="/jobscolombia.png" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal text-white text-center">Please sign in</h1>


                <div className="form-floating">
                    <input type="text" className="form-control" id="username" placeholder="Username" 
                           value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="password" placeholder="Password" 
                           value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password">Password</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{ color: '#ffffff' }}>
                Remember me
            </label>
                </div>
                <button className="custom-button w-100 py-2" type="submit">sign in</button>
                {message && <p className="mt-3 text-danger">{message}</p>}
            </form>
        </main>
    );
};

export default Login;
