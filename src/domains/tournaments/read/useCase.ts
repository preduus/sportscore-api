import PostgresRepository from '../../../repositories/adapters/PostgresRepository';

class UseCase {
  constructor(private repository: PostgresRepository) {}

  async execute(id?: string) {
    if (!id) return await this.repository.findAll();

    const exists = await this.repository.exists(id);
    if (!exists) {
      throw new Error("Not found");
    }

    return await this.repository.findById(id);
  }
}

export default UseCase;
