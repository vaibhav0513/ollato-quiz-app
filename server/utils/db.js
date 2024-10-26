const mongoose = require("mongoose");

// const URI = "mongodb+srv://cluster0.g25g2.mongodb.net/mern_admin";

// mongoose.connect(URI)

const URI = process.env.MONGODB_URI;


const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log('connection successful to DB');
    
  } catch (error) {
    console.log("database connection failed");
    process.exit(0);
    
  }
};

module.exports = connectDb;