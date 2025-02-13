const express = require('express');

const {
    getUser,
    getUsers,
    registerUser,
    loginUser,
    genOTP,
} = require('../controllers/users');
const authToken = require('../middlewares/authToken');

const userRoutes = express.Router();

userRoutes.get('/' , getUsers);
userRoutes.get('/:user_id' , getUser);
userRoutes.post('/',registerUser);
userRoutes.post('/login' , loginUser);
userRoutes.post('/otp' , genOTP);
// userRoutes.post('/reset_password' , authToken , resetPassword);

module.exports = userRoutes;