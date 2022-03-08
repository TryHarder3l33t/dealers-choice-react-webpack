//nodemon server/db/db.js
const Sequelize = require("sequelize");
const db = new Sequelize(
  "postgres://alkhkwrgfjvjow:5a26d64525207bda331c6344015fbc25ac6b0307ca0e1b16c516662437738199@ec2-3-221-25-147.compute-1.amazonaws.com:5432/d2bnfl3gah40lu" ||
    "postgres://localhost/dealers_choice_react_webpack",

  {
    //turns gibberish off
    logging: false,
  }
);
// const db = new Sequelize(
//   process.env.DATABASE_URL ||
//     "postgres://localhost/dealers_choice_react_webpack",
//   {
//     //turns gibberish off
//     logging: false,
//   }
// );

module.exports = { db, Sequelize };
