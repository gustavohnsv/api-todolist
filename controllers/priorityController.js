const tasks = require('../models/todolistData')

module.exports = {

    async read(request, response) {
        const priority = request.query;
        const priorityList = await tasks.find(priority);
        return response.json(priorityList);
    },

    async update(request, response) {
        const { id } = request.params;
        const task = await tasks.findOne({ _id: id });
        if(task) {        
            if(task.priority) {
                task.priority = false;
            } else {
                task.priority = true;
            }
            await task.save();
            return response.json(task)
        } 
        return response.status(404).json({
            error: 'Não foi possível localizar o ID.'
        });
    }

}