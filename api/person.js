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

router.post("/", async (req, res) => {
  try {
    console.log("Hello Post");
    console.log(req.body.role);
    // res.json(`This is ${req.body.description}`);
    // const person = {
    //   character: "batman",
    //   actor: "robin",
    //   role: "superhero",
    //   occupation: "cop",
    // };

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

module.exports = router;

/*
const Person = db.define(
  "person",
  {
    character: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    actor: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.DataTypes.STRING,
      defaultValue: "Customer",
    },
    occupation: {
      type: Sequelize.DataTypes.STRING,
      defaultValue: "Fullstack Student",
    },
  },

  {
    hooks: {
      beforeCreate: function (person) {
        if (!person.occupation) {
          person.occupation = "Tree Hugger";
        }
        console.log(`
        This is ====>>
            ${person.character} 
            ${person.actor} 
            ${person.role} 
            ${person.occupation}`);
      },
    },
  }
);
*/
