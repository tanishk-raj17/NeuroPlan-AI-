const mongoose =
  require("mongoose");



const weaknessSchema =
  new mongoose.Schema(

    {

      firebaseUID: {

        type: String,

        required: true,
      },

      topics: [

        {

          name: String,

          score: Number,

          improvement: Number,

        },

      ],

      confidenceScore: {

        type: Number,

        default: 0,
      },

      focusScore: {

        type: Number,

        default: 0,
      },

      aiAnalysis: {

        type: String,

        default: "",
      },

      recommendations: [

        String,
      ],

      alerts: [

        String,
      ],

    },

    {

      timestamps: true,
    }
  );



module.exports =
  mongoose.model(

    "Weakness",

    weaknessSchema
  );