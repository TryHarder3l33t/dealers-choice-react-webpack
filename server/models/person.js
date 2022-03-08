const { db, Sequelize } = require("../db/db");

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

module.exports = Person;
