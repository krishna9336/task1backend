import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { User } from './model/user.js';
import {config} from "dotenv"


 export const app = express();


config({
    path:"./data/config.env"
})
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json({
        message:"User Created",
        savedUser});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({
        message:"Updated User Details",
        updatedUser});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


