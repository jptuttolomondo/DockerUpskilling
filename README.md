# Upskilling Henry
-----------------------
Microservicios utilizando Docker Compose
-----------------------


Este proyecto es un demo de trabajos en microservicios utilizando docker-compose y una Virtual Machine provista en un servicio de Google Cloud.
Consiste en 5 endpoints con sus servers respectivos.
- Characters : Brinda datos de personajes ded videojuegos.
- Planets: Información de Planetas en los cuales se desarrollan los films.
- Films: Información de las películas, relacionadas con los personajes y los filmes
- Database : Es un servicio conectado a una base de datos NoSql, administrada desde  MongoDb Atlas, que provee los documentos y colecciones para los tres servicios.
- Gateway: Servicio de ruteo de los endpoints, actua de tal forma de ocultar los puertos de los servicios individuales, exponiendo al usuario solamente el puerto de acceso 8000
Estos endpoints ofrecen respuestas a peticiones de datos de cada una de las colecciones.
  Database: Se estructuró un conjunto de Schemas como models en MongoDb, estableciéndose las relaciones entrte los modelos, con sus hdrataciones de datos.
  Characters, Planets y Films: Cada servicio dispone de un servidor express ejecutándose con Node.js, con sus respoectivas rutas de acceso a los datos mediantte la base de datos administrada por el servicio database
  Gateway: Dispone del servidor de acceso,puerto 8000, el cual actúa como proxy de los otros tres servidores (80011,8002,8003) que se corresponden con cada uno de los servicios.  
  
Dichos containers, utilizando Docker compose, terminan siendo accesibles a una única IP pública, provista por google cloud , todas pudienddose acceder desde gateway:8000.

34.16.152.13:8000/characters

34.16.152.13:8000/films

34.16.152.13:8000/planets

Con lo cual se dispone de un backend listo para ser consumido.

