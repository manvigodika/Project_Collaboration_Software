const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };
    console.log("HERE");
    const conn = await mongoose.connect(
      "mongodb+srv://aditya:adityaagr00@task-manager.doeb2.mongodb.net/ProjectManagement?retryWrites=true&w=majority",
      options
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
