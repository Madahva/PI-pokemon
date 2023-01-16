const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
    },

    vida: {
      type: DataTypes.INTEGER,
    },

    ataque: {
      type: DataTypes.INTEGER
    },

    defensa: {
      type: DataTypes.INTEGER,
    },

    velocidad: {
      type: DataTypes.INTEGER,
    },

    altura: {
      type: DataTypes.INTEGER,
    },

    peso: {
      type: DataTypes.INTEGER,
    },
  });
};
