const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/users");

const app = express();
const PORT = 8000;

app.use(express.json());

app.use(cors());

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
