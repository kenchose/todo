const mongoose = require('mongoose');
const Task = mongoose.model("Task");

module.exports = {
    new: (req, res)=>{
        console.log("Creatred new product", req.body);
        // let newTask = new Product(req.body);
        // newTask.save((err, savedProduct)=>{
        //     if(err){
        //         res.json({message: "Unsuccessfully saved new product", err});
        //     }else{
        //         res.json({message: "Successfully saved new product", savedProduct});
        //     }
        // })
    },
}