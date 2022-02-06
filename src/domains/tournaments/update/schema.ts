import * as Joi from 'joi';
import { SchemaValidator } from '../../../validators/schema';

const updateSchema = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string(),
    display: Joi.string(),
    slug: Joi.string(),
  }).required().min(1);
  SchemaValidator(req, res, next, schema);
}

export { updateSchema };