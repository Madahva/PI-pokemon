const { Pokemon, Type } = require("../db.js");

const getAllBichos = async () => {
  const bichos = await Pokemon.findAll({
    include: {
      model: Type,
      through: {
        attributes: [],
      },
    },
  });
  return bichos;
};

const createBicho = async (
  name,
  health,
  attack,
  defense,
  speed,
  height,
  weight,
  types
) => {
  //Creamos el bicho en la DB
  const newBicho = await Pokemon.create({
    name: name.toLocaleLowerCase(),
    health: parseInt(health),
    attack: parseInt(attack),
    defense: parseInt(defense),
    speed: parseInt(speed),
    height: parseInt(height),
    weight: parseInt(weight),
  });

  //Le asignamos el tipo
  types.forEach(async (type) => {
    let typesDb = await Type.findAll({
      where: { name: type },
    });
    newBicho.addTypes(typesDb);
  });

  return newBicho;
};

module.exports = {
  createBicho,
  getAllBichos,
};
