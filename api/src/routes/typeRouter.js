const { Router } = require("express");
const { Type } = require("../db");
const { getTypes } = require("../controllers/typeController.js");
const typeRouter = Router();

typeRouter.get("/", async (req, res) => {
  const types = await getTypes();
  res.status(200).send(types);
});

typeRouter.post("/", async (req, res) => {
  const { name } = req.body
  
  const newType = await Type.create({
    name,
  })

  res.status(200).send(newType)
})

module.exports = typeRouter;
