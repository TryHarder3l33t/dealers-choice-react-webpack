//Heroku calls server.js so put you express stuff here dont move it andddddd your seed call too

// const { setDefaultResultOrder } = require("dns/promises");
const express = require("express");
const app = express();
const path = require("path");
const seed = require("./bin/seed");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  try {
    console.log(`Express is listening on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;

//parses incoming JSON requests and puts the parsed data in req.body.
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//just sending data no longer sending html in the routes
//handles the api part of the requuest sends to router in the api/index.js
app.use("/api", require("./api"));

//If you are looking for dist whatever is after it loook in dist
app.use("/dist", express.static(path.join(__dirname, "dist")));
//Send html file when the server is hit
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

seed();
