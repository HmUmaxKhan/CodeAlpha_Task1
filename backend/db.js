const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/forms?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Connected to MongoDB"));
}

module.exports = connectDB;