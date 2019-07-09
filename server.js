const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const mongooseDatabase = require('./server/config/mongoose');
const taskRoute = require('./server/controllers/tasks');

app.use(express.static(__dirname + "/dist/todo"));

mongoose.connect(mongooseDatabase.database, { useCreateIndex:true, useNewUrlParser:true} );
mongoose.connection.on("connected", () => console.log("Connected on database " + mongooseDatabase.database));
mongoose.connection.on("error", (err) => console.log("Database connection error " + (err)));

// require('./server/models/task');
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
let Task = mongoose.model("Task", TaskSchema)
app.get("/tasks", (req, res) => {
    Task.find({}, (err, tasks) => {
        res.json(tasks)
    })
})
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("/dist/todo/index.html"));
})

app.listen(7000, () => console.log("Listening on port 7000"));