const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const torneoController = require('../controllers/torneoController');

router.post('/', authMiddleware, torneoController.crearTorneo);
router.get('/', torneoController.listarTorneos);
router.post('/:id/equipos', authMiddleware, torneoController.agregarEquipos);
router.get('/:id/tabla', torneoController.obtenerTablaPosiciones);

module.exports = router;
//