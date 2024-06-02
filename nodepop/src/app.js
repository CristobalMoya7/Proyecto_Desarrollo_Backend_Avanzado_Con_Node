const express = require('express');
const app = express();

// Configurar middleware

// Configurar rutas
const { setRoutes } = require('./routes/index');
setRoutes(app);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});