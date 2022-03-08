//const router = require(".");
const router = require("express").Router();
const Person = require("../server/models/person");

router.get("/", async (req, res) => {
  try {
    const response = await Person.findAll();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
