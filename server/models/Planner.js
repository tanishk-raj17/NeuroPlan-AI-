const mongoose =
  require("mongoose");

const plannerSchema =
  new mongoose.Schema(

    {

      firebaseUID: {

        type: String,

        required: true,
      },

      tasks: [

        {

          title: String,

          time: String,

          type: String,

          duration: String,

          completed: {

            type: Boolean,

            default: false,
          },

        },

      ],

      streak: {

        type: Number,

        default: 0,
      },

      progress: {

        type: Number,

        default: 0,
      },

      weakArea: {

        type: String,

        default: "",
      },

      focusTime: {

        type: String,

        default: "",
      },

      recommendations: [

        String,
      ],

      notifications: [

        String,
      ],

    },

    {

      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Planner",
    plannerSchema
  );