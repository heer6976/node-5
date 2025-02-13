const { User, users } = require("../models/users");

// For getting data

const getUsers = async (req, res) => {
  const allUsers = await User.find();

  res.status(200).json({
    users: allUsers,
  });
};

// For getting single data

const getUser = async (req, res) => {
  const user_id = req.params["user_id"];

  const singleUser = await User.findOne({ _id: user_id });

  if (!singleUser) {
    return res.status(404).json({
      msg: "user is not exist",
    });
  } else {
    return res.status(200).json({
      user: singleUser,
    });
  }
};

// For create user

const createUser = async (req, res) => {
  try {
    const { username, password, ...userData } = req.body;

    await User.create({ username: username, password: password });

    res.status(201).json({
      msg: "user added",
    });
  } catch (error) {
    res.status(500).json({
      msg: "intrnal server error",
      error: error,
    });
  }
};

// For update user

const updateUser = async (req, res) => {
  const user_id = req.params["user_id"];

  const user_data = req.body;

  const singleUser = await User.findOne({ _id: user_id });

  if (!singleUser) {
    return res.status(404).json({
      msg: "User is Not Exist",
    });
  } else {
    if (user_data["username"]) {
      singleUser["username"] = user_data["username"];
    }

    if (user_data["password"]) {
      singleUser["password"] = user_data["password"];
    }

    if (user_data["age"]) {
      singleUser["age"] = user_data["age"];
    }

    singleUser.save();

    return res.status(202).json({
      msg: "User's Data has been Updated Successfully",
    });
  }
};

// For delete data

const deleteUser = async (req, res) => {
  const user_id = req.params["user_id"];

  const singleUser = await User.findById(user_id);

  if (!singleUser) {
    return res.status(404).json({
      msg: "user is not exist",
    });
  } else {
    await User.deleteOne({ _id: user_id });
    return res.status(202).json({
      msg: "User is Removed Successfully",
    });
  }
};

module.exports = { getUser, getUsers, createUser, updateUser, deleteUser };
