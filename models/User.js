const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  job: String,
});

module.exports = mongoose.model("User", userSchema);
