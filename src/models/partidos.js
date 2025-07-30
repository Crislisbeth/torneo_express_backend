const db = require('../config/db');

const Partido = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM partidos');
    return rows;
  },
  create: async (partido) => {
    const { torneo_id, equipo_local_id, equipo_visitante_id, goles_local, goles_visitante, fecha } = partido;
    const [result] = await db.query(
      'INSERT INTO partidos (torneo_id, equipo_local_id, equipo_visitante_id, goles_local, goles_visitante, fecha) VALUES (?, ?, ?, ?, ?, ?)',
      [torneo_id, equipo_local_id, equipo_visitante_id, goles_local, goles_visitante, fecha]
    );
    return result.insertId;
  }
};

module.exports = Partido;
