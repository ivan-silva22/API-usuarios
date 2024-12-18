# Backend de Gestión de Usuarios

Este es un backend que permite realizar las siguientes operaciones relacionadas con usuarios:

- **Crear usuarios**
- **Listar usuarios**
- **Obtener un usuario por su ID**
- **Iniciar sesión (login)**

## Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **JSON Web Tokens (JWT)** para autenticación
- **bcrypt** para hash de contraseñas

## Requisitos previos

1. **Node.js** y **npm** instalados.
2. **MongoDB** en funcionamiento.
3. Tener un archivo `.env` con las siguientes variables:
   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/mi_base_de_datos
   JWT_SECRET=mi_secreto_para_tokens
   ```

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/backend-usuarios.git
   cd backend-usuarios
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Ejecutar el servidor:
   ```bash
   npm start
   ```

## Endpoints

### 1. Crear usuario

**POST** `/auth/registro`

#### Body (JSON):
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "mi_contraseña"
}
```

#### Respuesta:
- **201 Created**: Usuario creado exitosamente.
```json
{
  "message": "Usuario creado con éxito",
  "user": {
    "id": "abc123",
    "name": "Juan Pérez",
    "email": "juan@example.com"
  }
}
```

### 2. Listar usuarios

**GET** `/auth/usuarios`

#### Respuesta:
- **200 OK**: Lista de usuarios.
```json
[
  {
    "id": "abc123",
    "name": "Juan Pérez",
    "email": "juan@example.com"
  },
  {
    "id": "def456",
    "name": "Ana López",
    "email": "ana@example.com"
  }
]
```

### 3. Obtener un usuario

**GET** `/auth/usuario/:id`

#### Respuesta:
- **200 OK**: Detalles del usuario.
```json
{
  "id": "abc123",
  "name": "Juan Pérez",
  "email": "juan@example.com"
}
```
- **404 Not Found**: Usuario no encontrado.
```json
{
  "message": "Usuario no encontrado"
}
```

### 4. Iniciar sesión

**POST** `/auth/login`

#### Body (JSON):
```json
{
  "email": "juan@example.com",
  "password": "mi_contraseña"
}
```

#### Respuesta:
- **200 OK**: Inicio de sesión exitoso.
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "abc123",
    "name": "Juan Pérez",
    "email": "juan@example.com"
  }
}
```
- **401 Unauthorized**: Credenciales incorrectas.
```json
{
  "message": "Correo o contraseña incorrectos"
}
```

## Estructura del proyecto

```
backend-usuarios/
├── controllers/
├── models/
├── routes/
├── .env
├── index.js
├── package.json
└── README.md
```

## Notas adicionales

- Las contraseñas se almacenan de forma segura utilizando `bcrypt`.
- El token generado para autenticación tiene una duración configurable.
- Asegúrate de proteger las rutas que requieren autenticación utilizando middleware apropiado.

---

¡Gracias por usar este backend! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.