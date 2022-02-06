import PostgresRepository from '../../../repositories/adapters/PostgresRepository';
import { IUpdateDTO } from './dto';

class UseCase {
  constructor(private repository: PostgresRepository) {}

  async execute(id: string, data: IUpdateDTO) {
    const exists = await this.repository.exists(id);
    
    if (!exists) {
      throw new Error('Not found.');
    }

    if (data.status) {
      Object.assign(data, { status: {...exists.status, ...data.status}})
    }

    await this.repository.update(id, data);
  }
}

export default UseCase;
