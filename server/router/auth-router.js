const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
// const loginSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middlewares");
const authMiddleware = require("../middlewares/auth-Middleware");

// this first method
// router.get("/", (req, res)=> {
//   res.status(200).send("Welcome to the oellto router");
// });

// this second method
router.route("/").get(authControllers.home);
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);
// router.route("/login").post(validate(loginSchema), authControllers.login);

router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;
