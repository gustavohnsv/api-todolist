const tasks = require('../models/todolistData')

module.exports = {
    async update(request, response) {
        const { id } = request.params;
        const { title, info } = request.body;
        const task = await tasks.findOne({ _id : id});

        if (title) {
            task.title = title;
            await task.save();
        }
        
        if (info) {
            task.info = info;   
            await task.save();
        }

        return response.json(task);
    }
}