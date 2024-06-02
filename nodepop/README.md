# NodePop

Este proyecto es un ejemplo de una aplicación tipo Wallapop desarrollada con Node.js.

## Estructura del proyecto

```
nodepop
├── src
│   ├── app.js
│   ├── controllers
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   ├── models
│   │   └── index.js
│   └── services
│       └── index.js
├── public
│   ├── css
│   │   └── main.css
│   ├── js
│   │   └── main.js
│   └── index.html
├── package.json
└── README.md
```

## Archivos del proyecto

- `src/app.js`: Punto de entrada de la aplicación. Crea una instancia de la aplicación Express y configura middleware y rutas.

- `src/controllers/index.js`: Exporta una clase `IndexController` que tiene un método `getIndex` para manejar la ruta raíz de la aplicación.

- `src/routes/index.js`: Exporta una función `setRoutes` para configurar las rutas de la aplicación. Utiliza el `IndexController` para manejar la ruta raíz.

- `src/models/index.js`: Exporta clases y funciones relacionadas con los modelos de datos de la aplicación.

- `src/services/index.js`: Exporta clases y funciones relacionadas con los servicios de la aplicación.

- `public/css/main.css`: Contiene estilos CSS para la interfaz de usuario de la aplicación.

- `public/js/main.js`: Contiene scripts JavaScript para la interfaz de usuario de la aplicación.

- `public/index.html`: Es la página principal de la aplicación.

- `package.json`: Archivo de configuración de npm. Lista las dependencias y scripts del proyecto.

- `README.md`: Documentación del proyecto.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/nodepop.git`
2. Navega al directorio del proyecto: `cd nodepop`
3. Instala las dependencias: `npm install`

## Uso

1. Inicia la aplicación: `npm start`
2. Abre tu navegador y visita `http://localhost:3000`

## Contribución

Si quieres contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Crea un fork del repositorio
2. Crea una rama para tu contribución: `git checkout -b mi-contribucion`
3. Realiza tus cambios y haz commit: `git commit -m "Mi contribución"`
4. Sube tus cambios a tu fork: `git push origin mi-contribucion`
5. Abre un pull request en este repositorio

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.