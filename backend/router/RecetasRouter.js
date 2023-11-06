const express = require("express");

const recetasControllers = require('../controllers/recetasControllers');

const router = express.Router();

//Rutas para los usuarios
router.get('/:id_receta', recetasControllers.verRecetasPorUsuario);
router.get('/', recetasControllers.obtenerRecetas);

module.exports = router;
