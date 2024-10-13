import '../css/Register.css';
import React, { useState } from 'react';
import { registerUser } from '../API';

const Register = () => {
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [inumber, setInumber] = useState('');
    const [address, setAddress] = useState('');
    const [pnumber, setPnumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ username, fullname, inumber, address, pnumber, email, password });

        try {
            const response = await registerUser(username, fullname, inumber, address, pnumber, email, password);
            setMessage(response.data.message);
        } catch (error) {
            console.log(error);
            setMessage(error.response?.data.message || 'Fallo en el registro del usuario.');
        }
    };

    return (
       
            <main className="form-signin">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" src="/jobscolombia.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal text-white text-center">Please register</h1>



                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="username" placeholder="Username" 
                               value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="fullname" placeholder="Full Name" 
                               value={fullname} onChange={(e) => setFullname(e.target.value)} />
                        <label htmlFor="fullname">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="inumber" placeholder="ID Number" 
                               value={inumber} onChange={(e) => setInumber(e.target.value)} />
                        <label htmlFor="inumber">ID Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="address" placeholder="Address" 
                               value={address} onChange={(e) => setAddress(e.target.value)} />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="pnumber" placeholder="Phone Number" 
                               value={pnumber} onChange={(e) => setPnumber(e.target.value)} />
                        <label htmlFor="pnumber">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" placeholder="Email" 
                               value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" 
                               value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>

                    <button className="custom-button w-100 py-2" type="submit">Register</button>

                    {message && <p className="mt-3 text-danger">{message}</p>}
                </form>
            </main>
        
    );
};

export default Register;
