'use strict'

//Cargar moduilos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

//Ejecutar express (HTTP)
var app = express();

//Cargar Ficheros rutas
var article_routes = require('./routes/article');

//Middelwares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CONFIGURAR CORS
// Midelware que se ejecuta antes de cada metodo o ruta, PERMITIR PETICIONES
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//Añadir prefijos a rutas
app.use('/api',article_routes);


//Exportar el modulo (fichero actual)
module.exports = app;