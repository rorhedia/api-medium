# Challenge API Medium

### Requerimientos
* Modelo de entradas
* Modelo de usuarios/escritores
* Registro e inicio de sesión
* Usar JWT y bcrypt
* Usar dotenv para guardar las credenciales
* CRUD de /entries con capacidad de consultar por id (GET /entries/:id)
* CRUD de /writers con capacidad de consultar por id (GET /writers/:id)
* /auth con login y registro
* Las únicas rutas que no deben estar protegidas son las rutas para listar las entradas del blog y la ruta para obtener un blog en especifico osea la ruta /entries/:id
* EXTRA POINTS: conecta tu backend con la maqueta de medium que entregaron en el desafio de frontend

### Instalación
~~~ 
~ npm install 
~~~

Copiar el archivo .env.example en la misma ruta
~~~
cp .env.example .env
~~~

Es necesario configurar las variables de entorno
```html
DB_USER="[Reemplazar por el usuario de la BD]"
DB_PASSWORD="[Reemplazar por la contraseña de la BD]"
DB_HOST="[Reemplazar por el host de la BD]"
DB_NAME="[Reemplazar por el nombre de la BD]"
JWT_SECRET="[Firma JWT]"
```

Para más información sobre como consumir la API puedes [importar la collection en postman](https://www.postman.com/collections/481bc33f9dfc4f3f83bd)
