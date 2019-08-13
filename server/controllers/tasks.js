const mongoose = require('mongoose');
const Task = mongoose.model("Task");
module.exports = {
  new: (req, res) => {
    let newTask = new Task(req.body);
    newTask.save((err, saveTask) => {
      if (err) {
        res.json({error: "Unsuccessfully saved new task",err});
      } else {
        res.json({success: "Successfully saved new task",saveTask});
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
    Task.find({}, (err, tasks, dayTasks) => {
      if(err) {
        res.json({error: "Error, couldn't find current day todo tasks", err});
      } else {
        var dayTasks = []
        var d = new Date();
        var day = d.getDate().toString();
        var month = d.getMonth();
        if(month <= 11){
          month+=1;
        }
        if(month < 10){
          month = '0'+month
        }
        month.toString();
        var year = d.getFullYear().toString();
        var fulldate = year+'-'+month+'-'+day.toString()
        for(let i = 0; i < tasks.length; i++){
          let c = tasks[i].dueDate = tasks[i].dueDate.slice(0, 10)
          if(tasks[i].dueDate == fulldate){
            dayTasks.push(tasks[i]);
          }
        }
        res.json({success: "Found todays todo schedule", dayTasks});
      }
    })
  },

  oneMyDay: (req, res) => {
    let id = req.params.id
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
    let id = req.params.id
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
    let id = req.params.id
    Task.findOne({_id: id}, (err, task) => {
        if(err) {
            res.json({error: "Error, error finding single task", err});
        } else {
            res.json(task);
        }
    })
  },

  editTask: (req, res) => {
    let id = req.params.id
    Task.findByIdAndUpdate(id, req.body, (err, task) => {
      if (err) {
        res.json({error: "Error, update was unsuccessful", err});
      } else {
        res.json({success: "Success, task is now updated", task});
      }
    })
  },

  deleteTask: (req, res) => {
    let id = req.params.id
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
    Task.find({}, (err, tasks, count) => {
      if(err) {
        res.json({error: "Error, could not count all tasks"});
      } else {
        var count = 0
        var newDate = []
        var d = new Date();
        var dayCheck = d.getDate().toString();
        var month = d.getMonth()+1;
        var monthCheck = month.toString();
        var yearCheck = d.getFullYear().toString();
        var fullDate = yearCheck+"-0"+monthCheck+"-"+dayCheck.toString()
        var dueDateTask = tasks.map(elem => elem.dueDate);
        dueDateTask.forEach(elem => {
          let sliced = elem.slice(0, 10)
          newDate.push(sliced)
        })
        for( let i = 0; i < newDate.length; i++){
          if(newDate[i].includes(fullDate)){
            count++;
          }
        }
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
  },

  completion: (req, res) => {
    let id = req.params.id;
    let updateTask = {
      "title":req.body.title,
      "note":req.body.note,
      "dueDate":req.body.dueDate,
      "priLevel":req.body.priLevel,
      "complete":!req.body.complete
    }
    Task.findByIdAndUpdate({_id:id}, updateTask, (err, task) => {
      if(err){
        res.json({error:"Error, could not find task", err});
      } else {
          res.json({success: "Success, switched property complete to true", task});
      }
    })
  }
}
