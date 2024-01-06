import Sequelize from 'sequelize';
import Users from './Users.js';
import dotnet from 'dotenv';

dotnet.config()

export const sequelize = new Sequelize(`${process.env.POSTGRESQL_DB_URI}`, {
  logging: false,
})

export const UsersTB = Users(sequelize)
