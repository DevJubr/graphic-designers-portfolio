const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(express.json());

const serverStart = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    app.listen(process.env.PORT, () => {
      console.log("server started on port " + process.env.PORT);
      console.log("database connection established");
    });
  } catch (error) {
    console.error(error, "database connection error");
    process.exit(1);
  }
};

serverStart();
