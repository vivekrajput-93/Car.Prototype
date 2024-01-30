const express = require("express");
const { PORT } = require("./config/ServerConfig");
const bodyParser = require("body-parser");
const connectDB = require("./config/db")
const apiRoutes  = require("./routes/index");


const app = express();
app.use(express.json());


// Database connection
connectDB();

// routes connection
app.use("/api", apiRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})