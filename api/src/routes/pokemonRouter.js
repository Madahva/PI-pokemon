const { Router } = require("express");
const { Pokemon, Type } = require("../db.js");
const { createBicho } = require("../controllers/pokemonController.js");

const pokemonRouter = Router();

pokemonRouter.get("/", async (req, res) => {
  const bichos = await Pokemon.findAll({
    include: {
      model: Type,
      through: {
        attributes: [],
      },
    },
  });

  res.status(200).send(bichos)
});

pokemonRouter.post("/", async (req, res) => {
  try {
    const { name, health, attack, defense, speed, height, weight, types } =
      req.body;

    if (
      !name ||
      !health ||
      !attack ||
      !defense ||
      !speed ||
      !height ||
      !weight ||
      !types.length
    ) {
      return res.status(500).send({ error: "All fields are required! 😅" });
    }

    const newBicho = await createBicho(
      name,
      health,
      attack,
      defense,
      speed,
      height,
      weight
    );

    const typesDb = await Type.create({
      name: types,
    });
    newBicho.addTypes(typesDb);

    res.status(200).json(newBicho);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = pokemonRouter;
