import { DataTypes, Model } from 'sequelize';

const sequelize = require('../infra/db');

class Tournaments extends Model {}
const properties = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: DataTypes.TEXT,
  display: DataTypes.TEXT,
  slug: DataTypes.TEXT,
  seasonId: DataTypes.UUID,
};
Tournaments.init(properties, { sequelize, timestamps: true, modelName: 'tournaments' });

export default Tournaments;