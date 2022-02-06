import Teams from '../../../entities/Teams';
import PostgresRepository from '../../../repositories/adapters/PostgresRepository';
import ReadController from './controller';
import UseCase from './useCase';

const repository = new PostgresRepository(Teams);
const readUseCase = new UseCase(repository);
const readController = new ReadController(readUseCase);

export { readController };
