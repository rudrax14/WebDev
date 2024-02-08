// import model

const Todo = require("../models/todo.models");

// define route handler

exports.createTodo = async (req, res) => {
    try {
        // extract data from request body
        const { title, description, status } = req.body;
        // create a new todo and insert it into the database
        const response = await Todo.create({ title, description, status });
        // send the response
        res.status(201).json({
            sucess: true,
            data: response,
            message: "Todo created successfully",
        });
    } catch (error) {
        console.error("Error creating todo: ", error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: "Error creating todo",
        });
    }
};
