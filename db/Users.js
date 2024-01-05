import Sequelize, {DataTypes} from "sequelize";

export default function (sequelize) {
  return sequelize.define('Users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(100)
    },
    is_admin: {
      type: Sequelize.BOOLEAN
    },
    collections_ids: {
      type: Sequelize.ARRAY(DataTypes.NUMBER)
    }
  }, {
    tableName: 'users'
  });
}
