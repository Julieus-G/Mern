const toDoModel = require('../models/todomodel');

//Getting all the todos
module.exports.getToDos = async(req, res) => {
    const toDos = await toDoModel.find()
    res.send(toDos)
}

//saving a todo
module.exports.saveToDo = async(req, res) => {

    const { text } = req.body;
    console.log(text)

    toDoModel.create({text}).then((data) => {
        console.log("Added sucessfully...");
        console.log(data)
        res.send(data)
    })


}

// updating a todo
module.exports.updateToDo = async(req, res) => {

    const { _id, text } = req.body;

    toDoModel.findByIdAndUpdate(_id, {text}).then(()=>{
        req.send("Updated Successfully...")
    }).catch((err)=>{
        console.log(err)
    }) 
}

// deleting a todo
module.exports.deleteToDo = async(req, res) => {

    const { _id } = req.body;

    toDoModel.findByIdAndDelete(_id).then(()=>{
        req.send("Deleted Successfully...")
    }).catch((err)=>{
        console.log(err)
    })
    
}