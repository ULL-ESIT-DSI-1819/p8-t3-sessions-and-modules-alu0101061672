# Práctica 8: Cookies, Sesiones, Autenticación y Módulos npm

En esta práctica se va a crear y publicar un módulo npm que provea un middleware express que provee autenticación para acceder a los ficheros en una determinada ruta.

### Create a node module

Un módulo npm es un arvicho JavaScript ordinario con la adición de que debe seguir las especificaciones del módulo CommonJS. Los módulos de Node se ejecutan en su propio ámbito para que no entren en conflicto con otros módulos. Node proporciona acceso a algunos globales para ayudar a facilitar la interoperabilidad del módulo. Los dos elementos principales son: require y exports.

Para empezar creamos un fichero llamado *index.js* que contenga el ***module.exports***, necesario para que el código esté disponible para que lo utilicen otros módulos.



![Html](capturas/.png)