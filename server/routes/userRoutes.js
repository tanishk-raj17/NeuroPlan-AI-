const express =
  require("express");

const router =
  express.Router();

const {

  saveOnboarding,

  getUserDashboard,

} = require(

  "../controllers/userController"
);



router.post(

  "/onboarding",

  saveOnboarding
);



router.get(

  "/dashboard/:firebaseUID",

  getUserDashboard
);



module.exports =
  router;