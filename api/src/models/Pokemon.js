const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "pokemon",
    {
      id: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },

      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },

      health: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        validate: { min: 0 },
      },

      attack: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        validate: { min: 0 },
      },

      defense: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        validate: { min: 0 },
      },

      speed: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        validate: { min: 0 },
      },

      height: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        validate: { min: 0 },
      },

      weight: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },

      /* image: {
        defaultValue: "https://i.imgur.com/bZfY4Fr.png",
        type: DataTypes.STRING,
      },*/
    },

    {
      timestamps: false,
    }
  );
};
