const task = require('./../controllers/tasks');

module.exports = (app) => {

    app.post('/tasks/new', (req, res) => {
        task.new(req, res)
    });

    app.get('/tasks', (req, res) => {
        task.all(req, res)
    });

    app.get('/tasks/myday', (req, res) => {
        task.myDay(req, res)
    });

    app.get('/tasks/myday/:id', (req, res) => {
        task.oneMyDay(req, res);
    })
    
    app.get('/tasks/important', (req, res) => {
        task.important(req, res)
    });

    app.get('/tasks/important/:id', (req, res) => {
        task.oneImportant(req, res);
    })

    app.get('/tasks/task/:id', (req, res) => {
        task.oneTask(req, res);
    })

    app.put('/tasks/edit/:id', (req, res) => {
        task.editTask(req, res);
    })

    app.delete('/tasks/delete/:id', (req, res) => {
        task.deleteTask(req, res);
    })
}