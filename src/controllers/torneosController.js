const Torneo = require('../models/torneos');

exports.getTorneos = async (req, res) => {
  try {
    const torneos = await Torneo.getAll();
    res.json(torneos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.crearTorneo = async (req, res) => {
  try {
    const id = await Torneo.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
