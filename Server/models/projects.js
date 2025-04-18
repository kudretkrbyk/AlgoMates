const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Project = sequelize.define(
  "project",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    liveview: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    github: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Project;
