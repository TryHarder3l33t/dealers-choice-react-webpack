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

    console.log(`
  
      Seeding successful!
      Cheers, now everyone knows your nameeeee!
  
    `);
    return [samMalone, carlaTorrelli, normPeterson, cliffClavin];
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
