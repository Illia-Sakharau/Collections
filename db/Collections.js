import Sequelize from "sequelize";
import { UsersTB } from "../db/index.js";

export default function (sequelize) {
  return sequelize.define('collections', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(256),
      allowNull: true
    },
    theme_id: {
      type: Sequelize.NUMBER,
      allowNull: false
    },
    image_url: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    user_id: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    fields_map_id: {
      type: Sequelize.NUMBER,
      allowNull: false
    }
  }, {
    tableName: 'collections'
  });
}
