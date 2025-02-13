const Blog = require("../models/blog");

const getOne = (req, res) => {};

const getAll = async (req, res) => {
  let pageNo = Number(req.query["page"]) || 1;
  let limit = Number(req.query["limit"]) || 5;

  let skipItems = (pageNo - 1) * limit;

  let total = await Blog.countDocuments();
  let totalPages = Math.ceil(total / limit);

  const blog = await Blog.find().populate("user", "username");
  res.json({
    data: blog,
    total: total,
    totalPages: totalPages,
  });
};

const create = async (req, res) => {
  const { title, content } = req.body;

  const user_id = req.user.data;

  let image = "";

  if (req.file && req.file.filename) {
    image = req.file.filename;
  }

  if (!title) return res.json({ msg: "title is required" });

  await Blog.create({ title, content, image, user: user_id });

  res.json({
    msg: "blog created",
  });
};

module.exports = { getOne, getAll, create };
