import Sequelize from 'sequelize';
import Users from './Users.js';
import dotnet from 'dotenv';

dotnet.config()

export const sequelize = new Sequelize(`${process.env.POSTGRESQL_DB_URI}?ssl=true`)

export const usersTB = Users(sequelize)
