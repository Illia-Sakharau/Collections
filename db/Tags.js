import Sequelize from "sequelize";

export default function (sequelize) {
  return sequelize.define('Users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(32),
      allowNull: false
    }
  }, {
    tableName: 'tags',
    timestamps: false
  });
}
