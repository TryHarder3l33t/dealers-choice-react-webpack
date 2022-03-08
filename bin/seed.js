const { db } = require("../server/db/db");
const Person = require("../server/models/person");

const seed = async () => {
  try {
    console.log("Seeed");
    await db.sync({ force: true });
    const samMalone = await Person.create({
      character: "Sam Malone",
      actor: "Ted Danson",
      role: "Owner/Bartender",
      occupation: "Former Football Player",
    });
    const carlaTorrelli = await Person.create({
      character: "Carla Tortelli",
      actor: "Rhea Perlman",
      role: "Waitress",
      occupation: "Mother",
    });
    const normPeterson = await Person.create({
      character: "Norm Peterson",
      actor: "George Wendt",
      role: "Customer",
      occupation: "Account, house painter, interior decorator",
    });
    const cliffClavin = await Person.create({
      character: "Cliff Clavin",
      actor: "John Ratzenberger",
    });
    //close the db
    //db.close();
    console.log(`
  
      Seeding successful!
      Cheers, now everyone knows your nameeeee!
  
    `);
    // const b  = await Person.create({
    //   character: "",
    //   actor: "",
    //   role: "",
    //   occupation: "",
    // });

    // const Person = db.define("person", {
    //   character: {
    //     type: Sequelize.DataTypes.STRING,
    //     allowNull: false,
    //   },
    //   actor: {
    //     type: Sequelize.DataTypes.STRING,
    //     allowNull: false,
    //   },
    //   role: {
    //     type: Sequelize.DataTypes.STRING,
    //     defaultValue: "Aires",
    //   },
    //   occupation: {
    //     type: Sequelize.DataTypes.STRING,
    //     defaultValue: "Customer",
    //   },
    // });
  } catch (error) {
    console.log(error);
  }
};

//Then promise
// seed().catch((err) => {
//   db.close();
//   console.log(`

//       Error seeding:

//       ${err.message}

//       ${err.stack}

//     `);
// });

module.exports = seed;
