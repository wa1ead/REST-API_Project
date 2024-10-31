const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/User");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("DATABASR CONNECTED SUCCESSFULLY");
  app.listen(3000, () => {
    console.log("SERVER STARTED SUCCESSFULLY");
  });
});
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.post("/users/new", async (req, res) => {
  const user = await new User({ name: req.body.name, job: req.body.job });
  console.log(req.body);
  await user.save();
  res.send(user);
});

app.put("/user/:id", async (req, res) => {
  const user = await User.findOneAndUpdate(
    { _id: req.params.id },
    { name: req.body.name, job: req.body.job },
    { new: true }
  );
  await user.save();
  res.send(user);
});

app.delete("/user/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.send(user);
});
