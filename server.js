const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const mongooseDatabase = require('./server/config/mongoose');

app.use(express.static(__dirname + "/dist/todo"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//deprecation warnings for findByIdAndUpdate(), findOneAndUpdate(); it's now findOneAndModify()


mongoose.connect(mongooseDatabase.database, { useCreateIndex:true, useNewUrlParser:true, useFindAndModify:false } );
mongoose.connection.on("connected", () => console.log("Connected on database " + mongooseDatabase.database));
mongoose.connection.on("error", (err) => console.log("Database connection error " + err));

require('./server/models/task')
require('./server/config/routes')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./dist/todo/index.html"));
})

app.listen(8000, () => console.log("Listening on port 8000"));