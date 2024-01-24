import Sequelize from "sequelize";

export default function (sequelize) {
  return sequelize.define('themes', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    en_name: {
      type: Sequelize.STRING(64),
      allowNull: false
    },
    ru_name: {
      type: Sequelize.STRING(64),
      allowNull: false
    }
  }, {
    tableName: 'themes',
    timestamps: false
  });
}
