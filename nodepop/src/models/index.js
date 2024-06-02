// Importar las dependencias necesarias
const mongoose = require('mongoose');

// Definir el esquema de los modelos de datos
const Schema = mongoose.Schema;

// Definir el esquema del modelo de anuncio
const AdSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ['electronics', 'vehicles', 'clothing', 'home'], required: true },
  createdAt: { type: Date, default: Date.now },
});

// Definir el modelo de anuncio
const Ad = mongoose.model('Ad', AdSchema);

// Exportar los modelos de datos
module.exports = {
  Ad,
};