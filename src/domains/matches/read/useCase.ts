import PostgresRepository from '../../../repositories/adapters/PostgresRepository';

class UseCase {
  constructor(private repository: PostgresRepository) {}

  async execute(id?: string) {
    if (!id) return await this.repository.findAll();
    return await this.repository.findById(id);
  }
}

export default UseCase;
