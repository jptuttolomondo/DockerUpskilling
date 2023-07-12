# Upskilling Henry
#Docker containers

Esto es un demo de trtabajos en microservicios utilizando docker-compose y una Virtual Machine provista en un servicio dde Google Cloud.
Consiste en 5 endpoints con sus servers respectivos.
- Characters : Brinda datos de personajes ded videojuegos.
- Planets: Infformación de Planetas en los cuales se desarrollan los films.
- Films: Información de lla peliculas, realcionaadaas con los personajes y los filmes
- Database : Es un servicio conectado a una base de datos NoSql, administrada desde  MongoDb Atlas, que provee los documentos y colecciones para los tres servicios.
- Gateway: Servicio de ruteo de los endpoints, actua de tal forma de ocultar los puertos de los servicios individuales, exponiendo al usuario solamente el puerto de acceso 8000
  Estos endpoints ofrecen respuestas a peticiones de datos de cada una de las colecciones.
  
Dichos containers, utilizando Docker compose, terminan siendo accesibles a una IP publica, provista por google cloud 
34.16.152.13:8000/characters
34.16.152.13:8000/films
34.16.152.13:8000/planets
