const authJwt  = require("../middleware/authjwt");
module.exports = app => {
  const users = require("../controller/user.controller.js");
  const controller=require("../controller/auth.controller.js");
  app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  var router = require("express").Router();
  // router.post("/create",verifySignUp.checkDuplicateUsernameOrEmail,users.create);
  // router.post("/insert",users.create);
  router.post("/login",controller.signin)
  router.get("/all", users.findAll);
  router.get("/image/:user_id",users.findimage)
  router.get("/details/:user_id", users.findOne);
  router.put("/update/:user_id", [authJwt.verifyToken],users.update);
  router.delete("/delete/:user_id", users.delete);

    app.use('/users', router);
  }
