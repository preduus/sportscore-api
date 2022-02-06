import Matches from '../../../entities/Matches';
import PostgresRepository from '../../../repositories/adapters/PostgresRepository';
import CreateController from './controller';
import UseCase from './useCase';
import { createSchema } from './schema';

const repository = new PostgresRepository(Matches);
const createUseCase = new UseCase(repository);
const createController = new CreateController(createUseCase);

export { createController, createSchema };
