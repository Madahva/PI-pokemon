const { Router } = require("express");
const { Type } = require("../db");
const { getTypes } = require("../controllers/typeController.js");
const typeRouter = Router();

typeRouter.get("/", async (req, res) => {
  try {
    const types = await getTypes();

    if (typeof types == "string") {
      res.status(500).send(types);
    } else {
      res.status(200).send(types);
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = typeRouter;
