import Sequelize from "sequelize";

export default function (sequelize) {
  return sequelize.define('tags', {
    name: {
      type: Sequelize.STRING(32),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tags',
    timestamps: false
  });
}
