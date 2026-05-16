const chatWithAI =
  async (req, res) => {

    try {

      const {

        prompt

      } = req.body;



      let reply =
        "I am Neuro AI 🤖";



      if (

        prompt.includes(
          "react"
        )

      ) {

        reply =
          "React is a JavaScript library used for building UI.";
      }



      else if (

        prompt.includes(
          "recursion"
        )

      ) {

        reply =
          "Recursion is when a function calls itself.";
      }



      else if (

        prompt.includes(
          "mongodb"
        )

      ) {

        reply =
          "MongoDB is a NoSQL database.";
      }



      else {

        reply =
          "I'm still learning. Ask me programming questions 😄";
      }



      res.status(200).json({

        success: true,

        reply,

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

  chatWithAI,

};