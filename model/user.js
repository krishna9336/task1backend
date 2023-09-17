import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required:[true,"Please Enter Your Name"],
    minLength:[5,"Name must be atleast 5 characters"]
},
lastName: {
  type:String,
  required:[true,"Please Enter Your Name"],
  minLength:[5,"Name must be atleast 5 characters"]
},
email: {
  type:String,
  required:[true,"Please Enter Your Email"],
  unique:true,
  validate:[validator.isEmail,"Please Enter a valid Email"]
},
mobile: {
   type: Number,
   required:[true,"Please Enter Your Mobile no"],
   unique:true
   
 },
address1: {
   type: String,
   required:[true,"Please Enter Your Address"],
 },
  address2: String,
  state: String,
  city: String,
  country: String,
  zipCode: Number,
});

export const User = mongoose.model("User", userSchema);


