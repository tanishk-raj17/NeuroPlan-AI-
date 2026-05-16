const Planner =
  require("../models/Planner");



const getPlanner =
  async (req, res) => {

    try {

      const {

        firebaseUID

      } = req.params;



      let planner =
        await Planner.findOne({

          firebaseUID,

        });



      if (!planner) {

        planner =
          await Planner.create({

            firebaseUID,

            tasks: [],

            streak: 12,

            progress: 68,

            weakArea:
              "Problem Solving",

            focusTime:
              "8 PM - 11 PM",

            recommendations: [

              "Practice DSA daily",

              "Revise React Hooks",

            ],

            notifications: [

              "Deep work session in 15 minutes",

            ],

          });
      }



      res.status(200).json({

        success: true,

        planner,

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Server Error",
      });
    }
  };



module.exports = {

  getPlanner,

};