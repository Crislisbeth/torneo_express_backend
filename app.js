<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
require('dotenv').config();
=======
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const torneoRoutes = require('./routes/torneoRoutes');
const partidoRoutes = require('./routes/partidoRoutes');

const sequelize = require('./config/db');

const Usuario = require('./models/usuario');
const Torneo = require('./models/torneo');
const Equipo = require('./models/equipo');
const Partido = require('./models/partido');

// Definir relaciones
Torneo.hasMany(Equipo, { foreignKey: 'torneo_id' });
Equipo.belongsTo(Torneo, { foreignKey: 'torneo_id' });

Torneo.hasMany(Partido, { foreignKey: 'torneo_id' });
Partido.belongsTo(Torneo, { foreignKey: 'torneo_id' });

Equipo.hasMany(Partido, { foreignKey: 'equipo1_id', as: 'equipo1' });
Equipo.hasMany(Partido, { foreignKey: 'equipo2_id', as: 'equipo2' });
>>>>>>> 2896be3e8838b216c310dd1567cd26298ac3478f

const app = express();

app.use(cors());
<<<<<<< HEAD
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
=======
app.use(helmet());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/torneos', torneoRoutes);
app.use('/api/partidos', partidoRoutes);

// Sincronizar BD y arrancar servidor
sequelize.sync({ alter: true }).then(() => {
  console.log('Base de datos sincronizada');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
  });
}).catch(err => console.error('Error al sincronizar BD:', err));
>>>>>>> 2896be3e8838b216c310dd1567cd26298ac3478f
