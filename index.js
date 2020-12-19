const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors({ credentials: true, origin: true }));
app.options("*", cors());

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/food', require('./routes/food'));

//PUERTO DE LA APP
const port = process.env.PORT || 4000;
// Escuchar peticiones
app.listen(port || 4000, '0.0.0.0', () => {
    console.log(`Servidor corriendo en: ${process.env.PORT}`);
});