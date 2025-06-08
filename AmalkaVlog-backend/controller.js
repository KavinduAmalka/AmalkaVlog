const { response } = require('express');
const User = require('./model');

const getUsers = (req, res, next) =>{
  User.find()
    .then(response =>{
      res.status(200).json({response});
    })
    .catch(error =>{
      res.status(500).json({error});
    });
};

const addUser = (req, res, next) => {
  const user = new User({
    id: req.body.id,
    name: req.body.name
  });
  user.save()
    .then(response => {
      res.status(201).json({response});
    })
    .catch(error => {
      res.status(500).json({error});
    });

};

const updateUser = (req,res,next) =>{
  const { id, name } = req.body;
  User.updateOne({ id:id }, {$set:{name:name}})
    .then(response => {
        res.status(201).json({response});
      })
      .catch(error => {
        res.status(500).json({error});
      });
};

const deleteUser = (req,res,next) =>{
  const id = req.body.id;
  User.deleteOne({id:id})
    .then(response => {
          res.status(201).json({response});
        })
        .catch(error => {
          res.status(500).json({error});
        });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;