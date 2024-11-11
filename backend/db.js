const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://jeetkansagra07:07M%40y1975@cluster0.lvnhq.mongodb.net/todos")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}