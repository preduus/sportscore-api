import Tournaments from '../../../entities/Tournaments';
import PostgresRepository from '../../../repositories/adapters/PostgresRepository';
import DeleteController from './controller';
import UseCase from './useCase';

const repository = new PostgresRepository(Tournaments);
const deleteUseCase = new UseCase(repository);
const deleteController = new DeleteController(deleteUseCase);

export { deleteController };
