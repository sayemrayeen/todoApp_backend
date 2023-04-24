const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//Need a middleware to parse json to request body.
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo API routes.
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//connection to the database.
const dbConnect = require("./config/database");
dbConnect();

//default route render on localhost server
app.get("/", (req, res) => {
    res.send(`<h1> This is HomePage </h1>`)
})   