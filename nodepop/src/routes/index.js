const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/index');

// Configurar las rutas para la aplicación
function setRoutes() {
  const indexController = new IndexController();

  // Ruta raíz de la aplicación
  router.get('/', indexController.getIndex);

  return router;
}

module.exports = setRoutes;