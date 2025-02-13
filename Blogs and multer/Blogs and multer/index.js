require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./src/routes/blog');
const userRoutes = require('./src/routes/users');
const path = require('path');
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');
const session = require('cookie-session')
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    name : "session",
    keys : [process.env.SESSION_SECRET_KEY],
  })
);

app.use('/images' , express.static(path.join(__dirname , 'public')));

app.use('/blog' , blogRoutes);
app.use('/user' , userRoutes);

app.get('/' , (req , res) => {
  console.log(req.cookies);

  res.cookie('item' , ['tm' , 'cid' , 'ct'] , {
    maxAge : 50000,
    httpOnly : true ,
    secure : true,
  });
  res.json({ msg : "server is running"});
});

app.get('/session' , (req , res) => {
  console.log(req.session);
  console.log('previous views' , req.session.views);
  req.session.views = (req.session.views || 0) + 1;
  console.log('updated views' , req.session.views);
  res.send('session updated');
});


app.listen(PORT, () => {
  mongoose.connect(process.env.MONGO_URL);
  console.log("DB Connected");
  console.log(`sever running on http://localhost:${PORT}/`);
});
