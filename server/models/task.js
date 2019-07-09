const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Must have a title for the task."]
    },
    description:{
        type:String,
        min:[5, "Must be at least 5 characters."],
        required:[true, "Description is required field."]
    },
    dueDate:{
        type:Date
    },
    complete:{
        type:Boolean,
        default:false
    },
    important:{
        type:Number,
        default:1
    }
}, {timestamps:{createdAt:"created_at"}});

mongoose.model("Task", TaskSchema);