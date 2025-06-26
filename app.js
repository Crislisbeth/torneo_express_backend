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

const app = express();

app.use(cors());
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
