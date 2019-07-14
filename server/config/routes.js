const task = require('./../controllers/tasks');

module.exports = (app) => {
    app.post('/tasks', (req, res) => {
        task.new(req, res)
    })
}