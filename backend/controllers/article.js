'use strict'

var Validator = require('validator');
var Article = require('../models/article');

var fs = require('fs');
var path = require('path');
const { exists } = require('../models/article');

var controler = {


    datosCurso: (req, res) => { //Es igual a Function(req, res)
        console.log('Estoy en el metodo Get........');
        var hola = req.body.hola;//Recibiendo Parametros del body

        return res.status(200).send({
            curso: 'Master en Frameworks JavasScript',
            autor: 'Vcitor Robles',
            web: 'Victorroblesweb.es',
            hola
        });
    },


    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de articulos'
        });
    },


    save: (req, res) => {
        //Recoger parametros por POST
        var params = req.body;

        //Validar datos (Validator)
        try {
            var validate_title = !Validator.isEmpty(params.title);
            var validate_content = !Validator.isEmpty(params.content);

        } catch (err) {
            return res.status(404).send({
                status: 'Error',
                article: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validate_content) {

            //Crear objeto a guardar
            var article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;

            if (params.image) {
                article.image = params.image;
            } else {
                article.image = null;
            }


            //Guardar el articulo
            article.save((err, articleStored) => {

                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'Error',
                        message: 'El artriculo no se ha guardado correctamente'
                    });
                }
                //Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    articleStored
                });


            });

        } else {
            return res.status(200).send({
                status: 'Error',
                article: 'Los Datos no son Validos'
            });
        }
    },


    getArticles: (req, res) => {
        //FIND

        var query = Article.find({});
        var last = req.params.last;

        if (last || last != undefined) {
            query.limit(4);
        }


        query.sort('-_id').exec((err, articles) => { // -_id ordena de forma descendente

            if (err) {
                return res.status(500).send({
                    status: 'Error',
                    article: 'Error al devolver los articulos'
                });
            }

            if (!articles) {
                return res.status(404).send({
                    status: 'Error',
                    article: 'Error no existe ningun articulo'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });

        });
    },


    getArticle: (req, res) => {

        //  Recibir el parametro ID por el Request
        var articleId = req.params.id;

        // Verificar que el id no sea Nulo
        Article.findById(articleId, (err, article) => {

            if (err || articleId == null) {
                return res.status(404).send({
                    status: 'Error',
                    article: 'Error con la Base de datos'
                });
            }

            // Monstrar el Resultado (Json)
            return res.status(200).send({
                status: 'success',
                article
            });

        });
    },


    update: (req, res) => {

        //  Recibir el parametro ID por la URL
        var articleId = req.params.id;

        //Recoger los datos que llegan por PUT
        var params = req.body;

        //Validar datos

        try {
            var validate_title = !Validator.isEmpty(params.title);
            var validate_content = !Validator.isEmpty(params.content);

        } catch (err) {
            return res.status(404).send({
                status: 'Error',
                article: 'Faltan Datos por enviar!!!'
            });
        }

        if (validate_content && validate_title) {
            // Find and Update


            Article.findOneAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {

                if (!articleUpdated || articleUpdated == undefined || err) {
                    return res.status(500).send({
                        status: 'Error',
                        article: 'Error al Actualizar o no existe el articulo En la base de Datos!!! '
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });

            });

        } else {

            // Devolver respuesta
            return res.status(200).send({
                status: 'Error',
                article: 'La Validacion no es correcta'
            });
        }
    },


    delete: (req, res) => {

        //  Recibir el parametro ID por la URL
        var articleId = req.params.id;

        // hacer un Find and Delete
        Article.findByIdAndDelete({ _id: articleId }, (err, articleRemoved) => {


            if (err || !articleRemoved) {
                return res.status(500).send({
                    status: 'Error',
                    article: 'Error al eliminar o el articulo no existe en la Base de datos'
                });
            }

            return res.status(200).send({
                status: 'success',
                message: 'Articulo = (' + articleId + ' ) Eliminado',
                article: articleRemoved
            });

        });


    },


    upload: (req, res) => {

        //Configurar el Modulo connect Multiparty Router/article.js (var md_upload = multipart({uploadDir: './upload/articles'});)

        //Recoger el fichero de la peticion
        var file_name = 'Imagen no Subida...';

        if (!file_name) {
            res.status(404).send({
                message: file_name
            });
        }

        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\'); // En Linux o MAC var file_split = file_path.split('/');

        //Nombre del archivo
        var file_name = file_split[2];

        //Extension del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        //Comprobar la extension, solo imagenes, si es valida borrar el fichero

        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {
            // Borrar el archivo subido

            fs.unlink(file_path, (err) => { //Elimina el archivo desde la ruta
                return res.status(500).send({
                    status: 'Error',
                    message: 'La Extension de la Imagen no es valida'
                })
            });

        } else {
            //Si todo es Valido , recoger id de los Parametros
            var articleId = req.params.id;

            if (articleId) {

                //Buscar el articulo, asignarle el nombre de la imagen y actualizarlo

                Article.findOneAndUpdate({ _id: articleId }, { image: file_name }, { new: true }, (err, articleUpdated) => {

                    if (err || !articleUpdated) {

                        fs.unlink(file_path, (err) => { //Elimina el archivo desde la ruta
                            return res.status(500).send({
                                status: 'Error',
                                message: 'Error al guardar la imagen de articulo!!!'
                            })
                        });


                    } else {

                        return res.status(200).send({
                            status: 'success',
                            article: articleUpdated
                        });

                    }
                });

            } else {

                return res.status(200).send({
                    status: 'success',
                    image: file_name
                });

            }


        }
    },


    getImage: (req, res) => {

        var file = req.params.image;
        var path_file = './upload/articles/' + file;

        fs.exists(path_file, (exists) => {

            if (exists) {
                return res.sendFile(path.resolve(path_file)); // retorna la Imagen

            } else {

                return res.status(500).send({
                    status: 'Error',
                    message: 'La Imagen no Existe'
                });
            }

        });
    },


    search: (req, res) => {

        //Sacar Strinmg a buscar ..
        var searchString = req.params.search;

        // Find or

        Article.find({
            "$or": [
                { "title": { "$regex": searchString, "$options": "i" } }, //Buscando en la bd en el titulo
                { "content": { "$regex": searchString, "$options": "i" } } //Buscando en la bd en el content
            ]
        })
            .sort([['date', 'descending']]) // ordenando la busqueda por fecha y desendente
            .exec((err, articles) => {            //Ejecutando el query

                if (err) {

                    return res.status(500).send({
                        status: 'Error',
                        message: 'Error en la Peticion!!!!!!'
                    });

                }

                if (!articles || articles.length <= 0) {

                    return res.status(404).send({
                        status: 'Error',
                        message: 'No hay articulos que coincidan con tu busqueda'
                    });
                }


                return res.status(200).send({
                    status: 'success',
                    articles
                });

            });
    }


}; // End controller

module.exports = controler;