import Sequelize from 'sequelize';
import dotnet from 'dotenv';

import Users from './Users.js';
import Tags from './Tags.js';
import Collections from './Collections.js';

dotnet.config()

export const sequelize = new Sequelize(`${process.env.POSTGRESQL_DB_URI}`, {
  logging: false,
})

export const UsersTB = Users(sequelize)
export const TagsTB = Tags(sequelize)
export const CollectionsTB = Collections(sequelize)

UsersTB.hasMany(CollectionsTB, {foreignKey: 'user_id'})
CollectionsTB.belongsTo(UsersTB, {foreignKey: 'user_id'})
