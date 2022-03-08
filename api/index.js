const router = require("express").Router();
//middleware
//from server.js
router.use("/person", require("./person"));

module.exports = router;
