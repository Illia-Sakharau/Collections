import Sequelize from "sequelize";

export default function (sequelize) {
  return sequelize.define('fields_maps', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    integer_1: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    integer_2: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    integer_3: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    string_1: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    string_2: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    string_3: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    text_1: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    text_2: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    text_3: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    boolean_1: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    boolean_2: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    boolean_3: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    date_1: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    date_2: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    date_3: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    date_3: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
  }, {
    tableName: 'fields_maps',
    timestamps: false
  });
}
