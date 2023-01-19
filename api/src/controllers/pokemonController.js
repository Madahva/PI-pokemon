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
    name: name.toLocaleLowerCase(),
    health: parseInt(health),
    attack: parseInt(attack),
    defense: parseInt(defense),
    speed: parseInt(speed),
    height: parseInt(height),
    weight: parseInt(weight),
  });

  return newBicho;
};

module.exports = {
  createBicho,
};
