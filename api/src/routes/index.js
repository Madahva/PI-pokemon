const { Router } = require("express");
const { createBicho } = require("../controllers/pokemonController.js");
const router = Router();

router.get("/pokemon", (req, res) => {
  res.status(200).json({ Hola: "xD" });
});

router.post("/pokemon", async (req, res) => {
  const { name, health, attack, defense, speed, height, weight } = req.body;


  const newBicho = await createBicho(
    name,
    health,
    attack,
    defense,
    speed,
    height,
    weight,
  );
  res.status(200).json(newBicho);
});

module.exports = router;
