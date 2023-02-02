'use strict'/*Activa el Modo estricto que exige mejores practicas de desarrollo*/ 



var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;
mongoose.set('strictQuery', true);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/api_rest_blog', //AGREGAR LA IP 127.0.0.1 EN VES DE LOCALHOST
                { useNewUrlParser: true,
                useUnifiedTopology: true 
                }).then(() => {
                    console.log('Conexión a la base de datos correcta a MONGODB !!!');

                    //CREAR SERVIDOR Y PONERME A ESCUCHAR PETICIONES HTTP
                    app.listen(port, () => {
                        console.log('===================================================');
                        console.log('Servidor corriendo en http://localhost:'+port);
                        console.log('===================================================');
                    });
        });

  

