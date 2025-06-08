const express = require('express');
const app =express();
const cors = require('cors'); 
const controllers = require('./controller');

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get('/users', (req, res) => {
  var resObj = [];
  controllers.getUsers(Users =>{
    res.send(Users);
  });
});

app.get('/user', (req,res)=>{
  const id = req.query.id;
  controllers.getUserById(id, user =>{
    res.send(user);
  });
});

module.exports = app;