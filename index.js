const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./routes/home");
const aboutRouter = require("./routes/about");

// tepmlate engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // serve views folder

// tell Express to "serve" the public directory
app.use(express.static(path.join(__dirname, "public")));

// routes
// home routes
app.use("/", homeRouter);
// about routes
app.use("/about", aboutRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
