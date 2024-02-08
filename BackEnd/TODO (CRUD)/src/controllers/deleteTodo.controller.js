// import model

const Todo = require("../models/todo.models");

// define route handler

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Todo.findByIdAndDelete(id);
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
            message: `Todo ${id} deleted successfully`,
        });
    } catch (error) {
        console.error("Error deleting todo: ", error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: "Error deleting todo",
        });
    }
};
