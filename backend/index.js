const express = require('express');
const connectDB = require('./db');
connectDB();
const app = express();

app.use('/api/form',require("./routers/form"));

app.listen(5000,()=>{
    console.log("Connected to port 5000");
})
app.use(express.json());