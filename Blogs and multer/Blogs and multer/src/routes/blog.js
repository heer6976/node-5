const express = require('express');
const blog = require('../controllers/blog');
const upload = require('../middlewares/uploadFiles');
const authToken = require('../middlewares/authToken');


const routes = new express.Router();

// Add routes
routes.get('/', blog.getAll);
routes.post('/', authToken , upload.single('image') , blog.create);
routes.get('/:blogId', blog.getOne);

module.exports = routes;
 