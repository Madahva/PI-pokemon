const { Router } = require("express");
const { createBicho } = require("../controllers/pokemonController.js");
const router = Router();

router.get("/pokemon", (req, res) => {
  res.status(200).json({ Hola: "xD" });
});

router.post("/pokemon", async (req, res) => {
  const { name, vida, ataque, defensa, velocidad, altura, peso } = req.body;

 console.log(req.body) 

  const newBicho = await createBicho(
    name,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso
  );
  res.status(200).json(newBicho);
});

module.exports = router;
