const Sequelize = require("sequelize");
module.exports = (sequelize,Sequelize ) => {
  const User = sequelize.define("users", {
    user_name: {
      type: Sequelize.STRING
    },
    user_id: {
      type: Sequelize.UUID,
  defaultValue: Sequelize.UUIDV4,
  allowNull: false,
  primaryKey: true
    },
    user_email: {
      type: Sequelize.STRING,
      unique: {
            args:true,
            msg: 'Email address already in use!'
        }
    },
    user_password: {
      type: Sequelize.STRING
    },
    user_image: {
      type: Sequelize.BLOB
    },
    total_orders: {
      type: Sequelize.INTEGER
    },
    last_logged_in:{
      type: Sequelize.DATE,
         defaultValue: Sequelize.NOW
    }
  });

  return User;
};
// user_id : A randomly generated UUIDV4
// user_name : The username of an user (May not be unique)
// user_email : The user’s email address (unique)
// user_password: The user’s password
// user_image : The user’s image
// total_orders : Total orders placed by user
// created_at : Timestamp when user was created
// last_logged_in: Timestamp when user last logged in
