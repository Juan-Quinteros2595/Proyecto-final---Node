# Proyecto Final Node.js + Firebase

Este proyecto es una API RESTful desarrollada en **Node.js** usando **Express.js** y **Firestore (Firebase)** como base de datos. Permite administrar un catálogo de productos mediante operaciones CRUD, protegidas mediante autenticación con **JWT**.

---

## Funcionalidades

- Obtener todos los productos [GET] /api/products
- Obtener un producto por ID [GET] /api/products/:id
- Crear un nuevo producto [POST] /api/products
- Actualizar un producto existente [PUT] /api/products/:id
- Eliminar un producto [DELETE] /api/products/:id
- Login con JWT (token de acceso requerido para todas las rutas de productos) [POST] | /auth/login

---

## Tecnologías usadas

- Node.js
- Express.js
- Firebase
- JSON Web Token
- dotenv
- CORS
