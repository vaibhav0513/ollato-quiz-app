const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  // Log the entire Authorization header
  console.log("Authorization Header:", req.header("Authorization"));

  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided in the header" });
  }

  // Remove "Bearer" prefix and trim
  const jwtToken = token.replace("Bearer", "").trim();
  console.log("Token after removing 'Bearer':", jwtToken);

  // Check if the JWT_SECRET_KEY is available
  console.log("JWT Secret Key:", process.env.JWT_SECRET_KEY);
  if (!process.env.JWT_SECRET_KEY) {
    return res
      .status(500)
      .json({ message: "Server error: JWT secret key is missing" });
  }

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // console.log("Verified token payload:", isVerified);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    console.log(userData);

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    // Proceed to the next middleware if verification is successful
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Invalid or expired token" });
  }
};

module.exports = authMiddleware;
