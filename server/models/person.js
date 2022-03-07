const { db, Sequelize } = require("../db/db");

module.exports = Person;

const Person = db.define("person", {
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  sign: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: "Aires",
  },
});
