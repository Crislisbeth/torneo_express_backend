const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/partidosController');

router.get('/', ctrl.getPartidos);
router.post('/', ctrl.crearPartido);

module.exports = router;
