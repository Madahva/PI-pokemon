const { Router } = require("express");
const { getBichos } = require("../controllers/pokemonController.js");
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ Hola: "xD" });
});

module.exports = router;
