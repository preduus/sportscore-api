import { DataTypes, Model } from 'sequelize';

const sequelize = require('../infra/db');

class Matches extends Model {}
const properties = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  homeTeamId: DataTypes.TEXT,
  awayTeamId: DataTypes.TEXT,
  customId: DataTypes.TEXT,
  status: DataTypes.JSON,
  tournamentId: DataTypes.TEXT,
  slug: DataTypes.TEXT,
};
Matches.init(properties, { sequelize, timestamps: true, modelName: 'matches' });

export default Matches;
