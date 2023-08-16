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
    fullname: {
        type: String,
         
    },
    phone: {
        type: String,
        
    },
    gender: {
        type: String,
        
    },
    age: {
        type: String,
        
    },
    dateOfBirth: {
        type: String,
        
    },
    address: {
        type: String,
        
    },
    yourSelf: {
        type: String,
        
    },
    university: {
        type: String,
        
    },
    semester: {
        type: String,
        
    },
    hobbies: {
        type: String,
        
    },
    skills: {
        type: String,
        
    },
    experience: {
        type: String
    },
    language: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", formSchema);
module.exports = User;
