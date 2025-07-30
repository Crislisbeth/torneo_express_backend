const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/equiposController');

router.get('/', ctrl.getEquipos);
router.post('/', ctrl.crearEquipo);

module.exports = router;
