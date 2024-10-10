const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Importa el modelo correctamente

// Función para registrar un usuario
const registerUser = async (username, fullname, password, idnumber, addrress, pnumber, email) => {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        throw new Error('El usuario ya está registrado.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, fullname, password: hashedPassword, idnumber, addrress, pnumber, email});
    await newUser.save();

    return newUser;
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Contraseña incorrecta.' });
    }

    // Aquí podrías generar un token JWT y devolverlo
    return res.status(200).json({ message: 'Inicio de sesión exitoso.', user }); // Devuelve el usuario o el token
};

module.exports = { registerUser, loginUser};