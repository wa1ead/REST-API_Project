const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("CONNECTED SUCCESSFULLY"))
  .catch((err) => {
    console.error(err);
  });
