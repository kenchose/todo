const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Must have a title for the task."]
    },
    note:{
        type:String,
    },
    dueDate:{
        type:String
    },
    priLevel:{
        type:String
    },
    complete:{
        type:Boolean,
        default:false
    }
}, {timestamps:{createdAt:"created_at"}});

mongoose.model("Task", TaskSchema);