import PostgresRepository from '../../../repositories/adapters/PostgresRepository';

class UseCase {
  constructor(private repository: PostgresRepository) {}

  async execute(id?: string) {
    const exists = await this.repository.exists(id);
    if (!exists) {
      throw new Error("Not found");
    }
    return await this.repository.remove(id);
  }
}

export default UseCase;
