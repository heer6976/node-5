const express = require("express");

const app = express();

// Default Route
app.get("/", (req, res) => {
  res.json({
    msg: "Hello, this is the default page",
  });
});

// Web based Middlware
function firstMiddleware(req, res, next) {
  console.log("firstMiddleware triggered");
  next(); // Call next() to pass control to the next middleware or route
}

app.use(firstMiddleware);

app.use("/first", (req, res, next) => {
  console.log("firstMiddleWareWithOtherType triggered");
  next();
});

// Route based middleware
app.get("/second", (req, res) => {
  console.log("Second API triggered");
  res.json({
    msg: "Hello, this is the Second Route",
  });
});

app.use("/second", (req, res, next) => {
  console.log("secondMiddleWare triggered");
  next();
});

// Error handling Middleware
app.use("/second", (err, req, res, next) => {
  console.log("Error in '/second' route handler:", err);
  res.status(500).json({
    msg: "Application failed",
  });
});

app.use((error, req, res, next) => {
  console.log("Global Error Handler:", error);
  res.status(500).json({
    msg: "Application failed",
  });
});

app.listen(8000);
