const { Router } = require("express");
const {
  createBicho,
  getAllBichos,
} = require("../controllers/pokemonController.js");

const pokemonRouter = Router();

pokemonRouter.get("/", async (req, res) => {
  const allBichos = await getAllBichos();
  res.status(200).send(allBichos);
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
      weight,
      types
    );

    res.status(200).json(newBicho);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = pokemonRouter;
