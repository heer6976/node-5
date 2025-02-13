const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  filename : function (req , file , config) {
    config(null ,  Date.now() + "-" + file.originalname);
  },
  destination : function (req , file , config) {
    config(null , path.join(__dirname , ".." , ".." , "public" , "images"));
  },
});

const upload = multer({ storage : storage });

module.exports = upload;