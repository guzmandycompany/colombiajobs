// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Cambia esto si tu backend está en otra dirección
});

export const registerUser = (username, fullname, idnumber, addrress, pnumber, email, password) => {
    return api.post('/register', { 
        username, 
        fullname, 
        idnumber, 
        addrress, 
        pnumber, 
        email, 
        password 
    });
};

export const loginUser = (username, password) => {
    return api.post('/login', { username, password });
};
