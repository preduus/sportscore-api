import * as Joi from 'joi';
import { SchemaValidator } from '../../../validators/schema';

const updateSchema = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string(),
    display: Joi.string()
  }).required().min(1);
  SchemaValidator(req, res, next, schema);
}

export { updateSchema };