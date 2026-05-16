const mongoose =
  require("mongoose");

const userSchema =
  new mongoose.Schema({

    firebaseUID: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    goal: {
      type: String,
      default: "",
    },
    subjects: {
      type: [String],
      default: [],
    },
    studyHours: {
      type: Number,
      default: 0,
    },
    strongAreas: {
      type: [String],
      default: [],
    },
    weakAreas: {
      type: [String],
      default: [],

    },
    onboardingCompleted: {
      type: Boolean,
      default: false,

    },

  },

  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "User",
    userSchema
  );