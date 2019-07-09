const mongoose = require('mongoose');
const Task = mongoose.model("Task");

module.exports = {
    all: (req, res) => {
        Task.find({}, (err, tasks) => {
            res.json(tasks)
        })
    }
}