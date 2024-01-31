const express = require("express");
const { PORT } = require("./config/ServerConfig");
const bodyParser = require("body-parser");
const connectDB = require("./config/db")
const apiRoutes  = require("./routes/index");
const cors = require("cors")

const app = express();
app.use(express.json());

app.use(cors());

// Database connection
connectDB();

// routes connection
app.use("/api", apiRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})