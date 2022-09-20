const { DataTypes } = require("sequelize");
const sequelize = require("../infra/dbSequelize");

const ProductModel = sequelize.define(
  "ProductModel",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    // createdAt: false,
    // updatedAt: false,
    tableName: "products",
    schema: "public",
  }
);

module.exports = ProductModel;
