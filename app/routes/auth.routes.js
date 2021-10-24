const  verifySignUp  = require("../middleware/verifySignUp");

module.exports = app => {
  const controller = require("../controller/auth.controller.js");
  const users = require("../controller/user.controller.js");
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  var router = require("express").Router();
  
  router.post("/create",verifySignUp.checkDuplicateUsernameOrEmail,users.create);
  router.post("/insert",verifySignUp.checkDuplicateUsernameOrEmail,users.insert);
    app.use('/users', router);
}
