'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = Schema({
    title: String,
    content: String,
    Date: { type: Date, default: Date.now},
    image: String
});

module.exports = mongoose.model('Article', ArticleSchema);
// Atricles --> Guarda documentyos de este tipo y con estructura dentro de la coleccion