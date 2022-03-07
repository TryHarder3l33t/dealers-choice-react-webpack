//nodemon server/db/db.js
const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://localhost/dealers_choice_react_webpack"
);

const init = async () => {
  try {
    await db.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
};

init();

module.exports = { db, Sequelize };
