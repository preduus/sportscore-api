import Teams from '../../../entities/Teams';
import PostgresRepository from '../../../repositories/adapters/PostgresRepository';
import DeleteController from './controller';
import UseCase from './useCase';

const repository = new PostgresRepository(Teams);
const deleteUseCase = new UseCase(repository);
const deleteController = new DeleteController(deleteUseCase);

export { deleteController };
