const express = require("express");
const router = express.Router();

// import controller
const { createTodo } = require("../controllers/createTodo.controller");
const { getTodo, getTodoById } = require("../controllers/getTodo.controller");
const { updateTodo } = require("../controllers/updateTodo.controller");
const { deleteTodo } = require("../controllers/deleteTodo.controller");
// define routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;