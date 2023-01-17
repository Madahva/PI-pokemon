const { Pokemon } = require("../db.js");

const createBicho = async (
    name,
    health,
    attack,
    defense,
    speed,
    height,
    weight
) => {
  const newBicho = await Pokemon.create({
    name,
    health,
    attack,
    defense,
    speed,
    height,
    weight
  });
  
  return newBicho;
};

module.exports = {
  createBicho,
};
