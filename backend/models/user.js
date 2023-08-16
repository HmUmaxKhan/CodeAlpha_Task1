const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const formSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    yourSelf: {
        type: String,
        required: true,
    },
    university: {
        type: String,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    hobbies: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
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
