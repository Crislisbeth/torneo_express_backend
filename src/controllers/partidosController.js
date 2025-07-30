const Partido = require('../models/partidos');

exports.getPartidos = async (req, res) => {
  try {
    const partidos = await Partido.getAll();
    res.json(partidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.crearPartido = async (req, res) => {
  try {
    const id = await Partido.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
