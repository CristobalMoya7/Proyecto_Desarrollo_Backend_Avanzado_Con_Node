'use strict';
require('dotenv').config();

const connection = require('./lib/connectMongoose');
const { Anuncio, Usuario } = require('./models');
const { pregunta } = require('./lib/utils');
const path = require('path');
const { URL } = require('url');
const fs = require('fs').promises;

async function main() {
  // Espera a que se conecte a la base de datos para reinicializar la BBDD
  try {
    // esperar a que se conecte a la BBDD
    await new Promise((resolve) => connection.once('open', resolve));

    // hacer la pregunta para no borrar todos los documentos por error
    const borrar = await pregunta(
      'Estas seguro que quieres borrar el contenido de esta BD (no): '
    );
    if (!borrar) {
      process.exit();
    }

    await inicializaUsuarios();
    await inicializaAnuncios();

    // cerramos la conexión con la BBDD
    connection.close();
  } catch (error) {
    console.log('Hubo un error', error);
  }
}

async function inicializaAnuncios() {
  // Reinicializará la BBDD

  // primero borrarmos todos los documento que pueda haber en la BBDD y mostramos en consola el número de documentos eliminados
  const eliminados = await Anuncio.deleteMany();
  console.log(`Eliminados ${eliminados.deletedCount} anuncios`);

  const [administrador, user] = await Promise.all([
    Usuario.findOne({ email: 'user1@example.com' }),
    Usuario.findOne({ email: 'user2@example.com' })
  ]);
  const insertados = await Anuncio.insertMany([
    {
      nombre: 'Móvil S24 ULTRA',
      venta: true,
      precio: 1999,
      foto: 'samsung.jpg',
      thumbFoto: '',
      tags: ['mobile', 'work'],
      owner: administrador._id
    },
    {
      nombre: 'Audi',
      venta: false,
      precio: 39000,
      foto: 'audi.jpg',
      thumbFoto: '',
      tags: ['motor', 'lifestyle'],
      owner: user._id
    },
    {
      nombre: 'Mercedes A45',
      venta: true,
      precio: 68900,
      foto: 'mercedes.jpg',
      thumbFoto: '',
      tags: ['motor', 'lifestyle'],
      owner: administrador._id
    },
    {
      nombre: 'Portátil Acer Nitro',
      venta: true,
      precio: 949,
      foto: 'acer_nitro.jpg',
      thumbFoto: '',
      tags: ['work'],
      owner: user._id
    },
    {
      nombre: 'Pantalones tejanos talla: 44',
      venta: false,
      precio: 15,
      foto: 'tejanos.jpg',
      thumbFoto: '',
      tags: ['lifestyle'],
      owner: administrador._id
    },
    {
      nombre: 'Móvil Samsung A14',
      venta: true,
      precio: 450,
      foto: 'samsung_a14.jpg',
      thumbFoto: '',
      tags: ['mobile'],
      owner: administrador._id
    },
    {
      nombre: 'Teclado mecánico EASYTAO',
      venta: true,
      precio: 220,
      foto: 'teclado.jpg',
      thumbFoto: '',
      tags: ['lifestyle'],
      owner: administrador._id
    }
  ]);
  console.log(`Creados ${insertados.length} anuncios`);
}

async function inicializaUsuarios() {
  // borrar todos los usuarios
  const deleted = await Usuario.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} usuarios.`);

  // crear usuarios iniciales
  const inserted = await Usuario.insertMany([
    {
      email: 'user1@example.com',
      password: await Usuario.hashPassword('1234')
    },
    {
      email: 'user2@example.com',
      password: await Usuario.hashPassword('1234')
    }
  ]);
  console.log(`Creados ${inserted.length} usuarios.`);
}

// ---------------------------------------------------------------------

main();
