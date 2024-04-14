const moongose = require('mongoose');
const todolistDataSchema = new moongose.Schema({
    title: String,
    info: String,
    priority: Boolean,
    date: { type: Date, default: Date.now }
});

module.exports = moongose.model('tasks', todolistDataSchema); // Nome do banco de dados // Schema do banco de dados
