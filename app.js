const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const authMiddleware = require('./src/middlewares/authMiddleware');

app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/usuarios', require('./src/routes/usuariosRoutes'));
app.use('/api/equipos', require('./src/routes/equiposRoutes'));
app.use('/api/jugadores', authMiddleware, require('./src/routes/jugadoresRoutes'));
app.use('/api/torneos', authMiddleware, require('./src/routes/torneosRoutes'));
app.use('/api/partidos', authMiddleware, require('./src/routes/partidosRoutes'));
app.use('/api/estadisticas', authMiddleware, require('./src/routes/estadisticasRoutes'));

module.exports = app;
