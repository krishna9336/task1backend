import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { User } from "./model/user.js";
import { config } from "dotenv";

export const app = express();

config({
  path: "./data/config.env",
});
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post("/api/users", async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    console.log(newUser);
    const savedUser = await newUser.save();
    res.json({
      message: "User Created",
      savedUser,
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/users/all", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.put("/api/users/:id", async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      message: "Updated User Details",
      updatedUser,
    });
  } catch (error) {
    next(error);
  }
});

app.delete("/api/users/:id", async (req, res, next) => {
  console.log("param passed=>", req.params.id);
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    next(error);
  }
});
