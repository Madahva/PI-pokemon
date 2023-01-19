const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "type",
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },

      name: {
        allowNull: false,
        defaultValue: ["unknown"],
        type: DataTypes.STRING,
        unique: true,
      },
    },

    { timestamps: false }
  );
};
