const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        minLength : 4,
        unique : true,
        lowercase : true,
        trim : true,
    },
    password : String,
    },
    {
        timestamps : true,
    }
);

const User = mongoose.model('User' , userSchema);

module.exports = { User };