const express = require("express");
const bodyParser = require("body-parser");
const appRoutes = require("./routes");

const PORT = 8087;
const app = express();

app.use(bodyParser.json());
app.use("/", appRoutes);

app.get("/", function (req, res) {
  console.log("Welcome to main landing page");
});

app.listen(PORT, function () {
  console.log("Application started");
});
