const Weakness =
  require("../models/Weakness");



const getWeaknessData =
  async (req, res) => {

    try {

      const {

        firebaseUID

      } = req.params;



      let weakness =
        await Weakness.findOne({

          firebaseUID,

        });



      if (!weakness) {

        weakness =
          await Weakness.create({

            firebaseUID,

            topics: [

              {

                name:
                  "Recursion",

                score: 28,

                improvement: 44,

              },

              {

                name:
                  "React Hooks",

                score: 42,

                improvement: 63,

              },

            ],

            confidenceScore:
              72,

            focusScore:
              81,

            aiAnalysis:
              "Neuro AI detected low consistency in recursion practice.",

            recommendations: [

              "Practice recursion daily",

              "Revise React Hooks",

            ],

            alerts: [

              "Low focus detected after midnight.",

            ],

          });
      }



      res.status(200).json({

        success: true,

        weakness,

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

  getWeaknessData,

};