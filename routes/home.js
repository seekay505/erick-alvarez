// home routes
const express = require("express");
const router = express.Router();
const { showHomePage } = require("../controllers/home");

// SHOW home page
router.get("/", showHomePage);  // defined in controllers/home.js

module.exports = router;