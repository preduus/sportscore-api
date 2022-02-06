import Teams from '../../../entities/Teams';
import PostgresRepository from '../../../repositories/adapters/PostgresRepository';
import UpdateController from './controller';
import UseCase from './useCase';
import { updateSchema } from './schema';

const repository = new PostgresRepository(Teams);
const updateUseCase = new UseCase(repository);
const updateController = new UpdateController(updateUseCase);

export { updateController, updateSchema };
