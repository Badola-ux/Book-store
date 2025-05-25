import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    fullname: {
    type: String,
    required: true,
      trim: true,          // trims whitespace from ends
    },
    email: {
    type: String,
    required: true,
    unique: true,
      lowercase: true,     // store emails lowercase for consistency
    trim: true,
    },
    password: {
    type: String,
    required: true,
    },
},
  { timestamps: true }    // optional but recommended to track creation & update time
);

const User = mongoose.model("User", userSchema);
export default User;
