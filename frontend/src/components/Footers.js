import React from 'react';

const Footers = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: '#223240', color: '#ffffff', padding: '0' }}>
            <footer className="py-3 my-0"> {/* Cambia my-4 a my-0 */}
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2" style={{ color: '#61788C' }}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2" style={{ color: '#ffffff' }}>Terminos</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2" style={{ color: '#ffffff' }}>Privacy</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2" style={{ color: '#ffffff' }}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2" style={{ color: '#ffffff' }}>About</a>
                    </li>
                </ul>
                <p className="text-center" style={{ color: '#ffffff' }}>© 2024 Guzmandy, Inc</p>
            </footer>
        </div>
    );
}

export default Footers;
