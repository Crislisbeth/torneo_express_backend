const Equipo = require('../models/equipos');

exports.getEquipos = async (req, res) => {
  try {
    const equipos = await Equipo.getAll();
    res.json(equipos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.crearEquipo = async (req, res) => {
  try {
    const id = await Equipo.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
