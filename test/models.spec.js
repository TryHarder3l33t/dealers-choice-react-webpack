const { expect } = require("chai");
const seed = require("../bin/seed");

describe("Models", () => {
  describe("seeded data", () => {
    it("There are 4 people in Cheers", async () => {
      const seeded = await seed();
      expect(seeded.length).to.equal(4);
    });
  });
});
