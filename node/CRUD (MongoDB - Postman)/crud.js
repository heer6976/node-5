const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/users");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = 8000;

app.use(express.json());

// app.use(cors());
app.use(cors({ origin: "*" }));

app.use("/user", userRoutes);

app.listen(PORT, async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/crud")
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error:", err));
  // console.log("DB connected");
  console.log(`server is running on http://localhost:${PORT}`);
});

// await mongoose.connect("mongodb://127.0.0.1:27017/crud")
//     .then(() => console.log("DB connected"))
//     .catch((err) => console.error("DB connection error:", err));
