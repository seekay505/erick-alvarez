const express = require("express");
const app = express();
const path = require("path");

// tepmlate engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // serve views folder

// tell Express to "serve" the public directory
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
  //   res.send("Hello world!");
  res.render("home.ejs");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
