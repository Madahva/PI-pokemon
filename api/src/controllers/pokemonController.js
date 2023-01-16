const { Pokemon } = require("../db.js");

const createBicho = async (
  name,
  vida,
  ataque,
  defensa,
  velocidad,
  altura,
  peso
) => {
  const newBicho = await Pokemon.create({
    name,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
  });
  
  return newBicho;
};

module.exports = {
  createBicho,
};
