const { Router } = require("express");
const {
  createBicho,
  getAllBichos,
  getBichoByName,
  getBichoById,
} = require("../controllers/pokemonController.js");

const pokemonRouter = Router();

pokemonRouter.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      bichos = await getBichoByName(name);
    } else {
      bichos = await getAllBichos();
    }

    if (!bichos) {
      res.status(500).send("Bicho Not Found");
    } else {
      res.status(200).send(bichos);
    }
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});

pokemonRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const bicho = await getBichoById(id);

    if (!bicho) {
      res.status(500).send("Bicho Not Found 👀");
    } else {
      res.status(200).send(bicho);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

pokemonRouter.post("/", async (req, res) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, types } =
      req.body;

    if (
      !name ||
      !hp||
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
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types
    );

    if (newBicho === "error") {
      res.status(500).send({ error: "Nombre no disponible" });
    } else {
      res.status(200).json(newBicho);
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = pokemonRouter;
