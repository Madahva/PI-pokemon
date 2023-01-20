const { Type } = require("../db");

async function getTypes() {
  const typesDb = await Type.findAll();

  if (typesDb.length) {
    return typesDb;
  }

  try {
    await fetch("https://pokeapi.co/api/v2/type/")
      .then((response) => response.json())
      .then((data) => {
        for (const type of data.results) {
          Type.create({ name: type.name });
        }
      });
  } catch (error) {
    return error.message;
  }
}

module.exports = { getTypes };
