import mongoose from "mongoose";

export const connectDB=()=>{
mongoose.connect('mongodb+srv://nodejstodo:nodejstodo@cluster0.sxkfyxh.mongodb.net/task1?retryWrites=true', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error(err));
}