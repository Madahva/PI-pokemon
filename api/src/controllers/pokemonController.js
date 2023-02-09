const { Pokemon, Type } = require("../db.js");
const fetch = require('node-fetch');

const getAllBichos = async () => {
  //Obtenemos los bichos de la API
  let bichosApi = [];

  await fetch("https://pokeapi.co/api/v2/pokemon?limit=110")
    .then((response) => response.json())
    .then(async (data) => {
      const pokemonPromises = data.results.map(async (pokemon) => {
        return fetch(pokemon.url).then((response) => response.json());
      });
      await Promise.all(pokemonPromises)
        .then((pokemonData) => {
          bichosApi = pokemonData.map((p) => {
            return {
              id: p.id,
              name: p.name,
              image: p.sprites.other["official-artwork"].front_default,
              hp: p.stats[0].base_stat,
              attack: p.stats[1].base_stat,
              defense: p.stats[2].base_stat,
              speed: p.stats[5].base_stat,
              height: p.height,
              weight: p.weight,
              types: p.types.map((t) => {
                return {
                  name: t.type.name,
                };
              }),
            };
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

  //Obtenemos los bichos de DB
  const bichosDb = await Pokemon.findAll({
    include: {
      model: Type,
      through: {
        attributes: [],
      },
    },
  });

  return [...bichosApi, ...bichosDb];
};

const getBichoByName = async (name) => {
  //Obtenemos el bicho de la API mediante el Nombre

  let bichoApi;

  try {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then(async (data) => {
        bichoApi = {
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
          height: data.height,
          weight: data.weight,
          types: data.types.map((t) => {
            return {
              name: t.type.name,
            };
          }),
        };
      });
  } catch (error) {
    console.log({ error: "Bicho Not Found" });
  }

  //Obtenemos el bicho de la DB mediante el Nombre
  const bichoDb = await Pokemon.findOne({
    where: { name: name.toLowerCase() },
    include: {
      model: Type,
      through: {
        attributes: [],
      },
    },
  });

  return bichoDb || bichoApi;
};

const createBicho = async (
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types
) => {
  //Verificamos que ese nombre este disponible en la API
  const alreadyExists = await getBichoByName(name);

  if (!alreadyExists) {
    //Creamos el bicho en la DB
    const newBicho = await Pokemon.create({
      name: name.toLocaleLowerCase(),
      hp: parseInt(hp),
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
  } else {
    return "error";
  }
};

const getBichoById = async (id) => {
  const UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  
  let bichoDb;

  if (UUID_REGEX.test(id)) {
    //Obtenemos el bicho de la DB mediante el ID
    bichoDb = await Pokemon.findOne({
      where: { id: id },
      include: {
        model: Type,
        through: {
          attributes: [],
        },
      },
    });
  }

  if (bichoDb) return bichoDb;

  let bichoApi;

  try {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then(async (data) => {
        bichoApi = {
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
          height: data.height,
          weight: data.weight,
          type: data.types.map((t) => {
            return {
              name: t.type.name,
            };
          }),
        };
      });
  } catch (error) {
    console.log({ error: "Bicho Not Found" });
  }

  return bichoApi;
};

module.exports = {
  createBicho,
  getAllBichos,
  getBichoByName,
  getBichoById,
};
