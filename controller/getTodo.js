//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async (req, res) => {
    try {
        //fetch all todo item from database.
        const todos = await Todo.find({});

        //update response 
        res.status(200).json({
            succeess: true,
            data: todos,
            message: "Entire todo data is fetched"
        });
    }
    catch (err) {
        console.error(err);
        res.status(500)
            .json({
                succeess: false,
                error: err.message,
                message: "Server Error"
            })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        //extract todo item basis on id.
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        //data for given id not find.
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found with given id"
            })
        }
        //data fro given id found
        res.status(200).json({
            succeess: true,
            data: todo,
            message: `todo ${id} data successfully fetched`
        })
    } catch (error) {
        console.error(error);
        res.status(500)
            .json({
                succeess: false,
                error: error.message,
                message: "Server Error"
            })
    }
}