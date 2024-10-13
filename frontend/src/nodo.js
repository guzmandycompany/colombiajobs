import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#223240', color: '#ffffff' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Brand</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2" style={{ color: '#61788C' }}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2" style={{ color: '#ffffff' }}>Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2" style={{ color: '#ffffff' }}>Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2" style={{ color: '#ffffff' }}>FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2" style={{ color: '#ffffff' }}>About</a>
                    </li>
                    <p className="text-center" style={{ color: '#ffffff' }}>© 2024 Company, Inc</p>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
