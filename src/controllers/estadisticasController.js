const Estadistica = require('../models/estadisticas');

exports.getEstadisticas = async (req, res) => {
  try {
    const estadisticas = await Estadistica.getAll();
    res.json(estadisticas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.crearEstadistica = async (req, res) => {
  try {
    const id = await Estadistica.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
