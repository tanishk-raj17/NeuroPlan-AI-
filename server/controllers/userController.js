const User =
  require("../models/User");



const saveOnboarding =
  async (req, res) => {

    try {

      const {

        firebaseUID,

        name,

        email,

        goal,

        subjects,

        studyHours,

        strongAreas,

        weakAreas,

      } = req.body;



      let user =
        await User.findOne({

          firebaseUID,

        });



      if (user) {

        user.goal =
          goal;

        user.subjects =
          subjects;

        user.studyHours =
          studyHours;

        user.strongAreas =
          strongAreas;

        user.weakAreas =
          weakAreas;

        user.onboardingCompleted =
          true;

        await user.save();

      }

      else {

        user =
          await User.create({

            firebaseUID,

            name,

            email,

            goal,

            subjects,

            studyHours,

            strongAreas,

            weakAreas,

            onboardingCompleted:
              true,

          });
      }



      res.status(200).json({

        success: true,

        message:
          "Onboarding Saved 🚀",

        user,

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



const getUserDashboard =
  async (req, res) => {

    try {

      const {

        firebaseUID

      } = req.params;



      const user =
        await User.findOne({

          firebaseUID,

        });



      if (!user) {

        return res.status(404).json({

          success: false,

          message:
            "User not found",
        });
      }



      res.status(200).json({

        success: true,

        user,

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

  saveOnboarding,

  getUserDashboard,

};