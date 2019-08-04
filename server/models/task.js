const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Must have a title for the task."]
    },
    note:{
        type:String,
        min:[5, "Must be at least 5 characters."],
        required:[true, "Note is required field."]
    },
    dueDate:{
        type:String
    },
    priLevel:{
        type:String,
    }
}, {timestamps:{createdAt:"created_at"}});

mongoose.model("Task", TaskSchema);