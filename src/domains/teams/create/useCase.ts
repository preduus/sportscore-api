import PostgresRepository from '../../../repositories/adapters/PostgresRepository';
import { ICreateDTO } from './dto';

class UseCase {
  constructor(private repository: PostgresRepository) {}

  async execute(data: ICreateDTO) {
    const { name } = data;
    const exists = await this.repository.existsWhere({ name });

    if (exists) {
      throw new Error('Already exists.');
    }

    await this.repository.store(data);
  }
}

export default UseCase;
