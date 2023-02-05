import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  created_At: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("Users", userSchema);
export default user;
