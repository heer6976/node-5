const { User } = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendOTP = require('../config/emailConfig');
const path = require('path');

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      users: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user_id = req.params["user_id"];

    const singleUser = await User.findOne({ _id: user_id });

    return res.status(200).json({
      user: singleUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "internal server error",
      error: error,
    });
  }
};

const salt = bcrypt.genSaltSync(8);

console.log(salt);

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);
    const hassPassword = bcrypt.hashSync(password, salt);

    await User.create({ username: username, password: hassPassword });

    res.status(201).json({
      msg: "user added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "error",
      error: error,
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username) return res.json({ msg: "please enter username " });

  if (!password) return res.json({ msg: "please enter password" });

  const user = await User.findOne({ username });

  if (!user) return res.json({ msg: "User not found" });

  console.log(username, password);

  const isPasswordOk = bcrypt.compareSync(password, user.password);

  if (!isPasswordOk) return res.json({ msg: "password is wrong" });

  const token = jwt.sign(
    { data: user._id, user: user.username },
    "privateKey",
    { expiresIn: "10m" }
  );

  res.json({
    token: token,
    msg: "User logged in successfuly",
  });
};

const otpStore = {};

const genOTP = (req , res) => {
  const email = req.body['email'];
  let otp = "";
  for(let i = 0 ;i < 4 ;i++)
  {
    let j = Math.floor(Math.random() * 10);
    if(j === 0)
    {
      j = 1;
    }
    otp += String(j);
  }
  let sub = 'otp Testing';
  let msg = "<h1 style = 'color : cyan ; text-align : center ; '>this is otp : " + otp + "</h1>";
  otpStore[email] = otp;

  let file_path = path.join(
    __dirname,
    "..",
    "..",
    "public",
    "images",
    "1738240567677-Screenshot 2024-05-10 173805.png"
  );
  sendOTP(email  , sub , msg , file_path);

  res.json({
    msg : "otp send",
  });
};

// const forgotPassword = async (req , res) => {
//   const { otp , email , password , username } = req.body;


// }

// const resetPassword = async (req , res) => {
//   const { old_password , new_password } = req.body;
//   const userData = req.user['data'];

//   if(old_password === new_password) return res.json({
//     msg : "both are same",
//   });

//   const user = await User.findOne({ _id : userData});

//   if(!user) return res.json({msg : "user not found"});

//   const hassPassword = bcrypt.hashSync(new_password , salt);
//   user.password = hassPassword;
//   user.save();
//   res.json({
//     msg : "password updated",
//   });
// };

module.exports = {
  getUser,
  getUsers,
  registerUser,
  loginUser,
  genOTP,
  // resetPassword,
};
