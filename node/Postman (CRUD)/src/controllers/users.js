const {users} = require("../models/users");

// For getting data

const getUsers = (req,res) => {
    res.status(200).json({
        users : users,
    });
}



// For getting single data

const getUser = (req,res) => {
    const user_id = Number(req.params["user_id"]);

    if(isNaN(user_id)) {
        return res.status(404).json({
            msg : "invalid url",
        });
    } else if (!users[user_id]) {
        return res.status(404).json({
            msg : "user is not exist",
        });
    }
    else {
        return res.status(200).json({
            user : users[user_id]
        });
    };
}

// For create user

const createUser = (req,res) => {
    users.push(req.body);
    res.status(201).json({
        msg : "User is Added Successfully !!",
    });
}

// For update user

const updateUser = (req,res) => {
    const user_id = Number(req.params["user_id"]);

    const user_data = req.body;

    if (isNaN(user_id)) {
        return res.status(404).json({
            msg : "Invalid URL",
        });
    } else if (!users[user_id]) {
        return res.status(404).json({
            msg : "User is Not Exist",
        });
    } else {
        if (user_data["username"]) {
            users[user_id]["username"] = user_data["username"];
        }

        if (user_data["age"]) {
            users[user_id]["age"] = user_data["age"];
        }

        if (user_data["email"]) {
            users[user_id]["email"] = user_data["email"];
        }

        return res.status(202).json({
            msg : "User's Data has been Updated Successfully"
        });
    };
}

// For delete data

const deleteUser = (req,res) => {
    const user_id = Number(req.params["user_id"]);

    if(isNaN(user_id)) {
        return res.status(404).json({
            msg : "invalid url",
        });
    } else if (!users[user_id]) {
        return res.status(404).json({
            msg : "user is not exist",
        });
    }
    else {
        delete users[user_id];
        return res.status(202).json({
            msg : "User is Removed Successfully",
        })
    };
}



module.exports = {getUser, getUsers, createUser, updateUser, deleteUser}