import { DataTypes, Model } from 'sequelize';

const sequelize = require('../infra/db');

class Teams extends Model {}
const properties = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: DataTypes.TEXT,
  title: DataTypes.TEXT,
  display: DataTypes.TEXT,
  city: DataTypes.TEXT,
  state: DataTypes.TEXT,
  country: DataTypes.TEXT,
};
Teams.init(properties, { sequelize, timestamps: true, modelName: 'teams' });

export default Teams;