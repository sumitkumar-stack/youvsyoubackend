import mongoose from "mongoose";

const Userschema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      match: [/^\+?[0-9 ]{10,15}$/, "Please enter a valid phone number"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    challengeType: {
      type: String,
      enum: ["Weight Loss", "Weight Gain", "Fitness", "Other"],
      required: true,
    },
    startingPoint: {
      type: Number,
      required: true,
    },
    targetGoal: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const Users = mongoose.model("Users", Userschema);

export default Users;
