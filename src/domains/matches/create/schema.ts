import * as Joi from 'joi';
import { SchemaValidator } from '../../../validators/schema';

const createSchema = (req, res, next) => {
  const schema = Joi.object({
    homeTeamId: Joi.string().required(),
    awayTeamId: Joi.string().required(),
    customId: Joi.string().required(),
    status: Joi.object({
      code: Joi.number().required(),
      description: Joi.string().required(),
      type: Joi.string().valid(...['inprogress', 'finished', 'cancelled', 'notstarted']).required()
    }).required(),
    tournamentId: Joi.string().required(),
    slug: Joi.string().required(),
  }).required().min(1);
  SchemaValidator(req, res, next, schema);
}

export { createSchema };