// import model

const Todo = require("../models/todo.models");

// define route handler

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;
        const response = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, status },
            { new: true }
        );
        if (!response) {
            return res.status(404).json({
                success: false,
                data: response,
                message: `No data found for id ${id}`,
            });
        }
        res.status(200).json({
            success: true,
            data: response,
            message: `Todo ${id} updated successfully`,
        });
    } catch (error) {
        console.error("Error updating todo: ", error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: "Error updating todo",
        });
    }
};
