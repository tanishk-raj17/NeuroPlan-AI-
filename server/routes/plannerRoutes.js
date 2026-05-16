const express =
  require("express");

const router =
  express.Router();

const {

  getPlanner,

} = require(

  "../controllers/plannerController"
);



router.get(

  "/:firebaseUID",

  getPlanner
);



module.exports =
  router;