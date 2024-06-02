# Proyecto Backend Avanzado con Node.js

## Uso de la aplicación

### Instalar MongoDB

Descarga e instala MongoDB desde [aquí](https://www.mongodb.com/try/download/community), y asegúrate de que el servidor está en ejecución.

### Clonar el repositorio

git clone https://github.com/CristobalMoya7/Proyecto_Desarrollo_Backend_Avanzado_Con_Node

# Configurar variables de entorno

1. Duplica `.env.example` y renómbralo a `.env`.
2. Completa las claves:
   - `JWT_SECRET_KEY`: usa [randomkeygen](https://randomkeygen.com/) para generar una.
   - `SECRET_SESSION`: clave secreta para las cookies de sesión.
   - `URL_MONGODB`: URL de tu base de datos MongoDB.

# Instalar dependencias

```
cd nodepop
npm install
```

# Inicializar la base de datos
### [!WARNING] Esto borra TODA la base de datos!!!

```
Copiar código
npm run init-db
```

# Desarrollo

Responde "si" para crear anuncios y usuarios de prueba:

- **email**: user1@example.com **password**: 1234
- **email**: user2@example.com **password**: 1234

Para ejecutar en modo desarrollo:

```sh
npm run dev
```

# API

## Autenticarse

**POST /api/authenticate**

Campos:
- `email`
- `password`

Incluye el token en cada petición:
- En la cabecera **Authorization**
- En el body con la clave **jwt**
- Como parámetro en la query string **jwt=token**

## Consultar anuncios

**GET /api/anuncios**

### Paginación y ordenación
**GET /api/anuncios?skip=2&limit=6&sort=precio**

### Filtros
**GET /api/anuncios?venta=true**  
**GET /api/anuncios?precio_min=110&precio_max=600**  
**GET /api/anuncios?nombre=logi**

## Crear anuncio

**POST /api/anuncios**

## Eliminar anuncio

**DELETE /api/anuncios/<_id>**

# Website

## Registrarse

Usa los datos de los usuarios de prueba:

- **email**: user1@example.com **password**: 1234
- **email**: user2@example.com **password**: 1234

## Diseño web

- **Header**: Enlace a la página principal, cambio de idioma, anuncios del usuario, cierre de sesión.
- **Body**: Muestra anuncios o formulario de login.
- **Footer**: Enlace a LinkedIn.

## Consultar productos

**GET /**  
**GET /?skip=2&limit=6&sort=precio**  
**GET /?venta=true**  
**GET /?precio_min=110&precio_max=600**  
**GET /?nombre=logi**

## Proyecto creado por Cristobal Moya Lorente