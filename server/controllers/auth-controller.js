const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// *------------------
// home logic
// *------------------
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the oellto router using authcontrollers");
  } catch (error) {
    console.log(error);
  }
};

// *------------------
// registration logic
// *------------------

// *------------------
// User registartion logic
// *------------------
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    // hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).send({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).send("internal server error");
    next(error);
  }
};

// *------------------
// User Login logic
// *------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // compare password
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

// *---------------------
// to send User data logic
// *----------------------

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    // res.status(200).json({ msg: "hi user" });
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
