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
      type: Sequelize.STRING(100),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    is_admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
}
