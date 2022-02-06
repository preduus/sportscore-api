import * as Joi from 'joi';
import { SchemaValidator } from '../../../validators/schema';

const createSchema = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    title: Joi.string().required(),
    display: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
  }).required().min(1);
  SchemaValidator(req, res, next, schema);
}

export { createSchema };