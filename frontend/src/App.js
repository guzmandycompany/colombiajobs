import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Empresas from './components/Empresas';
import SalariosBuscados from './components/SalariosBuscados';
import Horarios from './components/Horarios';
import CategoriasdeEmpleo from './components/CategoriasEmpleo';
import Footers from './components/Footers';
import HomePage from './components/Homepage'; // Corregido: Mayúscula en HomePage
import Capacitacion from './components/Capacitaciones';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar /> {/* Navbar solo se renderiza una vez aquí */}
                <Routes>
                    <Route path="/" element={<HomePage />} /> {/* Ruta de inicio */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Empresas" element={<Empresas />} />
                    <Route path="/SalariosBuscados" element={<SalariosBuscados />} />
                    <Route path="/HorariosDisponibles" element={<Horarios />} />
                    <Route path="/Categorias" element={<CategoriasdeEmpleo />} />
                    <Route path="/Capacitaciones" element={<Capacitacion />} />
                </Routes>
                <Footers />
            </div>
        </Router>
    );
};

export default App;
