import * as Joi from 'joi';
import { SchemaValidator } from '../../../validators/schema';

const updateSchema = (req, res, next) => {
  const schema = Joi.object({
    customId: Joi.string(),
    status: Joi.object({
      code: Joi.number(),
      description: Joi.string(),
      type: Joi.string().valid(...['inprogress', 'finished', 'cancelled', 'notstarted'])
    }),
    slug: Joi.string(),
  }).required().min(1);
  SchemaValidator(req, res, next, schema);
}

export { updateSchema };