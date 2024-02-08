const express = require("express");
const app = express();
// middleware
app.use(express.json());


// db connection
const dbConnection = require("./src/db/dbConnection");
dbConnection();

// import routes
const todoRoutes = require("./src/routes/todo.route");
// mounting routes
app.use("/api/v1", todoRoutes);



// default route
app.get("/", (req, res) => {
    res.send("Hello World");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});