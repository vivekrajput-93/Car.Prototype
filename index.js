const express = require("express");
const { PORT } = require("./config/ServerConfig");
const bodyParser = require("body-parser");
const connectDB = require("./config/db")
const apiRoutes  = require("./routes/index");
const cors = require("cors")
const path = require("path");


const app = express();
app.use(express.json());

app.use(cors());
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, './client/build')));

// Database connection
connectDB();

app.use('*', function(req,res) {
    const indexPath = path.resolve(__dirname,  'client', 'build', 'index.html');
res.sendFile(indexPath);

})

// routes connection
app.use("/api", apiRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})