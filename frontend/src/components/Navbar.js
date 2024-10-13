// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar" style={{ backgroundColor: '#223240', color: 'white' }}>
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                    <use xlinkHref="#bootstrap"></use>
                </svg>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="nav-link px-2 text-white">JobsColombia</Link></li>
                <li><Link to="Empresas" className="nav-link px-2 text-white">Empresas</Link></li>
                <li><Link to="Capacitaciones" className="nav-link px-2 text-white">Capacitaciones</Link></li>
                <li><Link to="Categorias" className="nav-link px-2 text-white">Categorias</Link></li>
            </ul>

            {/* Asegurándote de que este div ocupe el espacio restante */}
            <div className="ms-auto d-flex" style={{ paddingRight: '20px' }}>
                <Link to="/login" className="me-2">
                    <button
                        type="button"
                        style={{
                            backgroundColor: '#61788C',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                        }}
                    >
                        Contactanos
                    </button>
                </Link>
                <Link to="/login" className="me-2">
                    <button
                        type="button"
                        style={{
                            backgroundColor: '#61788C',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                        }}
                    >
                        Login
                    </button>
                </Link>
                <Link to="/register">
                    <button
                        type="button"
                        style={{
                            backgroundColor: '#98A6A2',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                        }}
                    >
                        Sign-up
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
