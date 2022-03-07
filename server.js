//Heroku calls server.js so put you express stuff here dont move it

const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});

module.exports = app;

//If you are looking for dist whatever is after it loook in dist
app.use("/dist", express.static(path.join(__dirname, "dist")));
//Send html file when the server is hit
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
