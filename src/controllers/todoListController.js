const tasks = require('../models/todolistData')

module.exports = {

    async read(request, response) {
        const todoList = await tasks.find().sort({ date: 1});
        return response.json(todoList);
    },

    async create(request, response) {

        const { title, info, priority } = request.body;

        if (!title || !info) {
            return response.status(400).json({
                error: 'Necessário preencher todos os dados.'
            });
        }

        const tasksCreated = await tasks.create({
            title,
            info,
            priority,
        });

        return response.json(tasksCreated);

    },

    async delete(request, response) {
        
        const { id } = request.params;
        const taskDeleted = await tasks.findOneAndDelete({ _id: id });
        if(taskDeleted) {
            return response.json(taskDeleted)
        }
        return response.status(404).json({
            error: 'Não foi possível localizar o ID.'
        });

    }
    
}