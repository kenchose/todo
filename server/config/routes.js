const task = require('./../controllers/tasks');

module.exports = (app) => {
    app.get('/tasks', (req, res) => {
        task.all(req, res)
    })
}