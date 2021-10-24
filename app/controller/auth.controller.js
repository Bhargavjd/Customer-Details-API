const db = require("../models");
const config = require("../config/auth.config");

const User = db.users;

const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.signin = (req, res) => {
  const {user_name,user_password}=req.body
  User.findOne({
    where: {
      user_name: req.body.user_name
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.user_password,
        user.user_password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ user_id: user.user_id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      return  res.status(200).send({
          id: user.id,
          user_name: user.user_name,
          user_email: user.user_email,
          accessToken: token
        });
}
)}
