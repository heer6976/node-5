const express = require("express");
const app = express();

app.use(express.json());

const lists = [];

// For Getting the Data
app.get("/work", (req, res) => {
  res.json({
    lists: lists,
  });
});

// For Creating User or Data
app.post("/work", (req, res) => {
  lists.push(req.body);
  res.status(201).json({
    msg: "Your List is Added Successfully !!",
  });
});

// For Getting Single Data
app.get("/work/:work_id", (req, res) => {
  const work_id = Number(req.params["work_id"]);

  if (isNaN(work_id)) {
    return res.status(404).json({
      msg: "Invalid URL",
    });
  } else if (!lists[work_id]) {
    return res.status(404).json({
      msg: "Task is Not Exist",
    });
  } else {
    return res.status(201).json({
      work: lists[work_id],
    });
  }
});

// For Delete the single data
app.delete("/work/:work_id", (req, res) => {
  const work_id = Number(req.params["work_id"]);

  if (isNaN(work_id)) {
    return res.status(404).json({
      msg: "Invalid URL",
    });
  } else if (!lists[work_id]) {
    return res.status(404).json({
      msg: "Task is not exist",
    });
  } else {
    delete lists[work_id];
    return res.status(204).json({
      msg: "Task is Removed Successfully",
    });
  }
});

// For Update tha Data of Single User
app.put("/work/:work_id", (req, res) => {
  const work_id = Number(req.params["work_id"]);

  const work_data = req.body;

  if (isNaN(work_id)) {
    return res.status(404).json({
      msg: "Invalid URL",
    });
  } else if (!lists[work_id]) {
    return res.status(404).json({
      msg: "Task is Not Exist",
    });
  } else {
    if (work_data["title"]) {
      lists[work_id]["title"] = work_data["title"];
    }

    if (work_data["task"]) {
      lists[work_id]["task"] = work_data["task"];
    }

    if (work_data["done"]) {
      lists[work_id]["done"] = work_data["done"];
    }

    return res.status(202).json({
      msg: "Task has been Updated Successfully",
    });
  }
});

app.listen(8000);
