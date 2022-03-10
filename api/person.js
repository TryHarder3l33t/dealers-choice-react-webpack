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
router.get("/:id", async (req, res, next) => {
  try {
    const responsee = await Person.findByPk(req.params.id);

    res.json(responsee);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Person.create({
      character: req.body.character,
      actor: req.body.actor,
      role: req.body.role,
      occupation: req.body.occupation,
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const offTheAir = await Person.findByPk(req.params.id);

    await offTheAir.destroy();
    console.log(`They are being replaced next season ${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatee = await Person.findByPk(req.params.id);

    updatee.set({
      character: req.body.character,
      actor: req.body.actor,
      role: req.body.role,
      occupation: req.body.occupation,
    });

    await updatee.save();
    //res.json(updatee);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
