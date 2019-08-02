const mongoose = require('mongoose');
const Task = mongoose.model("Task");
let today = new Date()
console.log(today)
module.exports = {
  new: (req, res) => {
    let newTask = new Task(req.body);
    newTask.save((err, saveTask) => {
      if (err) {
        res.json({message: "Unsuccessfully saved new task",err});
      } else {
        res.json({message: "Successfully saved new task",saveTask});
      }
    })
  },

  all: (req, res) => {
    Task.find({}, (err, tasks) => {
      if (err) {
        res.json({error: "Error, couldn't get all tasks", err});
      } else {
        res.json({success: "Success, got all tasks",tasks});
      }
    })
  },

  myDay: (req, res) => {
    Task.find({priLevel:['myDay']}, (err, dayTasks) => {
      if (err) {
        res.json({error: "Error, couldn't find current day todo tasks", err});
      } else {
        res.json({success: "Found todays todo schedule", dayTasks});
      }
    })
  },

  oneMyDay: (req, res) => {
    id = req.params.id
    Task.findOne({_id: id}, (err, myDay) => {
      if (err) {
        res.json({error: "Error, couldn't find myDay tasks",err});
      } else {
        res.json({success: "Found single myDay task",myDay});
      }
    })
  },

  important: (req, res) => {
    Task.find({priLevel: ['important']}, (err, importantTask) => {
      if (err) {
        res.json({error: "Error, couldn't find current important todo tasks", err});
      } else {
        res.json({success: "Success, found only important tasks", importantTask});
      }
    })
  },

  oneImportant: (req, res) => {
    id = req.params.id
    Task.findOne({_id: id}, (err, onlyOne) => {
      if (err) {
        res.json({error: "Error, cannot find single important task",err});
      } else {
        res.json({success: "Success, found single important task",onlyOne
        })
      }
    })
  },

  oneTask: (req, res) => {
    id = req.params.id
    Task.findOne({_id: id}, (err, task) => { //findOne if the data you get back is in an array. Remember to always console.log or typeOf
        if(err) {
            res.json({error: "Error, error finding single task", err});
        } else {
            res.json(task);
        }
    })
  },

  editTask: (req, res) => {
    id = req.params.id
    Task.findByIdAndUpdate(id, req.body, (err, task) => {
      if (err) {
        res.json({error: "Error, update was unsuccessful", err});
      } else {
        res.json({success: "Success, task is now updated", task});
      }
    })
  },

  deleteTask: (req, res) => {
    id = req.params.id
    Task.deleteOne({_id: id}, (err, task) => {
      if (err) {
        res.json({error: "Error, could not delete task", err});
      } else {
        res.json({success:"Successfully deleted", task});
      }
    })
  }
}
