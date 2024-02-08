// import model

const Todo = require("../models/todo.models");

// define route handler

exports.getTodo = async (req, res) => {
    try {
        // get all todos from the database
        const response = await Todo.find();
        // send the response
        res.status(200).json({
            success: true,
            data: response,
            message: "Todos fetched successfully",
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

exports.getTodoById = async (req, res) => {
    try {
        // extract todo id from request params
        const { id } = req.params;
        // find todo by id
        const response = await Todo.findById(id);
        // send the response
        // if no data found for the id
        if (!response) {
            return res.status(404).json({
                success: false,
                data: response,
                message: `No data found for id ${id}`,
            });
        }
        // if data found for the id
        res.status(200).json({
            success: true,
            data: response,
            message: `Todo ${id} fetched successfully`,
        });
    } catch (error) {
        console.error("Error while fetching id todo: ", error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: "Error creating todo",
        });
    }
}