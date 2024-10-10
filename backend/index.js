// index.js
const dotenv = require('dotenv');
dotenv.config(); // Cargar variables de entorno

const app = require('./app');

// Obtener el puerto de las variables de entorno o usar 3000 por defecto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});