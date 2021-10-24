const db = require('../models');
const User=db.users;
const Op=db.Sequelize.Op;

var bcrypt = require("bcryptjs");

exports.create=(req,res)=>{
  if (!req.body.user_name) {
     res.status(400).send({
       message: "Username can not be empty!"
     });
     return;
   }


   const user = {
     user_name: req.body.user_name,
     user_email: req.body.user_email,
     user_password: bcrypt.hashSync(req.body.user_password,8),
     user_image: req.body.user_image,
     total_orders:req.body.total_orders
};
     User.create(user)
      .then(data => {
        res.redirect("/users/all")
      res.send(data)
      ;
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the User."
     });
   });
};

exports.insert=(req,res)=>{
  if (!req.body.user_name) {
     res.status(400).send({
       message: "Username can not be empty!"
     });
     return;
   }


   const user = {
     user_name: req.body.user_name,
     user_email: req.body.user_email,
     user_password: bcrypt.hashSync(req.body.user_password,8),
     user_image: req.body.user_image,
     total_orders:req.body.total_orders
};
     User.create(user)
      .then(data => {
      res.send("successfully inserted new User")
      ;
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the User."
     });
   });
};

exports.findAll = (req, res) => {
  const user_name = req.query.user_name;
    var condition = user_name ? { user_name: { [Op.like]: `%${user_name}%` } } : null;

    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
};


exports.findOne = (req, res) => {
  const user_id = req.params.user_id;

    User.findByPk(user_id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${user_id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + user_id
        });
      });
};
exports.findimage = (req, res) => {
  const user_id = req.params.user_id;

    User.findByPk(user_id)
      .then(data => {
        if (data.user_image) {
          res.send(data.user_image);
        } else {
          res.status(404).send({
            message: `Cannot find User image  with id=${user_image}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User image with id=" + user_id
        });
      });
};


exports.update = (req, res) => {
  const user_id = req.params.user_id;

    User.update(req.body, {
      where: { user_id: user_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User  updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${user_id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating user with id=" + user_id
        });
      });
};

exports.delete = (req, res) => {
  const user_id = req.params.user_id;

    User.destroy({
      where: { user_id: user_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "user was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete user with id=${user_id}. Maybe user was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + user_id
        });
      });
};
