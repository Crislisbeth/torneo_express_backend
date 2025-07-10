const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const partidoController = require('../controllers/partidoController');

router.post('/', authMiddleware, partidoController.crearPartido);
router.put('/:id', authMiddleware, partidoController.actualizarResultado);
router.get('/torneo/:id', partidoController.listarPartidosPorTorneo);

module.exports = router;
//