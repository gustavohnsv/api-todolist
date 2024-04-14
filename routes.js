const express = require('express');
const routes = express.Router();

const todoListController = require('./controllers/todoListController');
const priorityController = require('./controllers/priorityController');
const contentController = require('./controllers/contentController');

// Rota todoList
routes.get('/todolist', todoListController.read);
routes.post('/todolist', todoListController.create);
routes.delete('/todolist/:id', todoListController.delete);

// Rota Priority
routes.get('/priorities', priorityController.read)
routes.post('/priorities/:id', priorityController.update);

// Rota Content
routes.post('/contents/:id', contentController.update);

module.exports = routes;