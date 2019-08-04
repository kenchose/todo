const mongoose = require('mongoose');
const Task = mongoose.model("Task");
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
    // let today = new Date().toISOString().slice(0,10) formats date readable
    Task.find({priLevel:['myDay']}, (err, dayTasks) => {
      if (err) {
        res.json({error: "Error, couldn't find current day todo tasks", err});
      } else {
        let now = new Date();
        let dayCheck = now.getDate();
        let monthCheck = now.getMonth();
        let yearCheck = now.getFullYear();
        res.json({success: "Found todays todo schedule", dayTasks, dayCheck, monthCheck, yearCheck});
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
    Task.findOne({_id: id}, (err, task) => {
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
  },

  countImportant: (req, res) => {
    Task.find({priLevel:'important'}).countDocuments((err, count) => {
      if (err) {
        res.json({error: "Error, could not count important task", err});
      } else {
        res.json(count)
      }
    })
  },

  countMyDay: (req, res) => {
    Task.find({priLevel:"myDay"}).countDocuments((err, count) => {
      if(err) {
        res.json({error: "Error, could not count my days"});
      } else {
        res.json(count);
      }
    })
  },

  countTask: (req, res) => {
    Task.find({}).countDocuments((err, count) => {
      if(err) {
        res.json({error: "Error, could not get count tasks", err});
      } else {
        res.json(count);
      }
    })
  }
}
