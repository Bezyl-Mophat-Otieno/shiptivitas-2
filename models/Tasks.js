import mongoose from 'mongoose';


const taskSchema = new mongoose.Schema({

    client : {
        type:String,
        required:[true, " client name must be provided as an Identification "]


    },
    rank:{
        type:Number,
        required:[true, " rank must be provided"]

    },
    state:{
        type:String,
        default:"Backlog",
        required:[true,"The state of a task must be specified"],

    }
})
module.exports = mongoose.model("Task",taskSchema)