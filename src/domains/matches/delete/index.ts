import Matches from '../../../entities/Matches';
import PostgresRepository from '../../../repositories/adapters/PostgresRepository';
import DeleteController from './controller';
import UseCase from './useCase';

const repository = new PostgresRepository(Matches);
const deleteUseCase = new UseCase(repository);
const deleteController = new DeleteController(deleteUseCase);

export { deleteController };
