const Partido = require('../models/partido');

exports.crearPartido = async (req, res) => {
  try {
    const partido = await Partido.create(req.body);
    res.status(201).json(partido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarResultado = async (req, res) => {
  const { id } = req.params;
  const { resultado } = req.body;
  try {
    const partido = await Partido.findByPk(id);
    if (!partido) return res.status(404).json({ msg: 'Partido no encontrado' });

    partido.resultado = resultado;
    await partido.save();

    res.json({ msg: 'Resultado actualizado', partido });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listarPartidosPorTorneo = async (req, res) => {
  const { id } = req.params;
  try {
    const partidos = await Partido.findAll({ where: { torneo_id: id } });
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
