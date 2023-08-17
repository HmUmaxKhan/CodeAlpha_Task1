const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const formSchema = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
        unique: true
    },
    password: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    dateOfBirth: {
        type: String,
        
    },
    address: {
        type: String,
        
    },
    university: {
        type: String,
        
    },
    semester: {
        type: String,
        
    },
    skills: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", formSchema);
module.exports = User;
