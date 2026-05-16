const express =
  require("express");

const router =
  express.Router();

const {

  getWeaknessData,

} = require(

  "../controllers/weaknessController"
);



router.get(

  "/:firebaseUID",

  getWeaknessData
);



module.exports =
  router;