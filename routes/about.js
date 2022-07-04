// about routes
const express = require("express");
const router = express.Router();
const { showAboutPage } = require("../controllers/about");

// SHOW about page
// prefixed in index.js
router.get("/", showAboutPage);  // defined in controllers/about.js

module.exports = router;