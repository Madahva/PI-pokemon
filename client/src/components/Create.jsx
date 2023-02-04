import css from "../assets/styles/Create.module.css";
import cutePokemons from "../assets/images/form.png";
import { useState } from "react";

const Create = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const [succestMsj, setSuccestMsj] = useState(false);

  const [error, setError] = useState({
    nameError: "",
    healthError: "",
    attackError: "",
    defenseError: "",
    speedError: "",
    heightError: "",
    weightError: "",
    typeError: "",
  });

  const handleChange = (event) => {
    const { name, value, options } = event.target;
    let selectedTypes = [];
    if (options) {
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedTypes.push(options[i].value);
        }
      }
    }
    validate(event);
    setPokemon({
      ...pokemon,
      [name]: name === "types" ? selectedTypes : value,
    });
  };

  const validate = (event) => {
    let nameError = "";
    let typeError = "";
    let healthError = "";
    let attackError = "";
    let defenseError = "";
    let speedError = "";
    let heightError = "";
    let weightError = "";

    if (!pokemon.name) {
      nameError = "Name is required";
    }

    if (!pokemon.types.length) {
      typeError = "Type is required";
    }

    if (!pokemon.hp) {
      healthError = "HP is required";
    }

    if (!pokemon.attack) {
      attackError = "Attack is required";
    }

    if (!pokemon.defense) {
      defenseError = "Defense is required";
    }

    if (!pokemon.speed) {
      speedError = "Speed is required";
    }

    if (!pokemon.height) {
      heightError = "Height is required";
    } else if (pokemon.height > 100) {
      heightError = "Height cannot be greater than 100";
    }

    if (!pokemon.weight) {
      weightError = "Weight is required";
    }

    if (
      nameError ||
      typeError ||
      healthError ||
      attackError ||
      defenseError ||
      speedError ||
      heightError ||
      weightError
    ) {
      setError({
        nameError,
        typeError,
        healthError,
        attackError,
        defenseError,
        speedError,
        heightError,
        weightError,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      try {
        await fetch("http://localhost:3001/pokemon", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pokemon),
        });
      } catch (error) {
        console.log({ error: error.message });
      }

      setSuccestMsj(true);

      setPokemon({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        type: [],
      });

      setError({
        nameError: "",
        healthError: "",
        attackError: "",
        defenseError: "",
        speedError: "",
        heightError: "",
        weightError: "",
        typeError: "",
      });
    }
  };

  return (
    <>
      <h1 className={css["create-tittle"]}>Create a new Pokemon</h1>
      {succestMsj ? (
        <div className={css.succestMessage}>
          <p>¡Pokemon Created!</p>
          <span>🐥</span>
          <button onClick={() => setSuccestMsj(false)}>Continue</button>
        </div>
      ) : null}
      <div className={css["form-container"]}>
        <form className={css.form} action="POST" onSubmit={handleSubmit}>
          <label className={css.label}>
            Name:
            <input
              type="text"
              name="name"
              value={pokemon.name}
              onChange={handleChange}
            />
            {error.nameError && <span>{error.nameError}</span>}
          </label>
          <label>
            Types:
            <select
              multiple={true}
              name="types"
              value={pokemon.types}
              onChange={handleChange}
            >
              <option value="normal">Normal</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="electric">Electric</option>
              <option value="grass">Grass</option>
              <option value="ice">Ice</option>
              <option value="fighting">Fighting</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="flying">Flying</option>
              <option value="psychic">Psychic</option>
              <option value="bug">Bug</option>
              <option value="rock">Rock</option>
              <option value="ghost">Ghost</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="steel">Steel</option>
              <option value="fairy">Fairy</option>
            </select>
            {error.typeError && <span>{error.typeError}</span>}
          </label>
          <label>
            HP:
            <input
              type="number"
              name="hp"
              value={pokemon.hp}
              onChange={handleChange}
            />
            {error.healthError && <span>{error.healthError}</span>}
          </label>
          <label>
            Attack:
            <input
              type="number"
              name="attack"
              value={pokemon.attack}
              onChange={handleChange}
            />
            {error.attackError && <span>{error.attackError}</span>}
          </label>

          <label>
            Defense:
            <input
              type="number"
              name="defense"
              value={pokemon.defense}
              onChange={handleChange}
            />
            {error.defenseError && <span>{error.defenseError}</span>}
          </label>

          <label>
            Speed:
            <input
              type="number"
              name="speed"
              value={pokemon.speed}
              onChange={handleChange}
            />
            {error.speedError && <span>{error.speedError}</span>}
          </label>

          <label>
            Height:
            <input
              type="number"
              name="height"
              value={pokemon.height}
              onChange={handleChange}
            />
            {error.heightError && <span>{error.heightError}</span>}
          </label>

          <label>
            Weight:
            <input
              type="number"
              name="weight"
              value={pokemon.weight}
              onChange={handleChange}
            />
            {error.weightError && <span>{error.weightError}</span>}
          </label>
          <button type="submit">Create Pokemon</button>
        </form>
        <img className={css.cutePokemons} src={cutePokemons} alt="pokemons" />
      </div>
    </>
  );
};

export default Create;
