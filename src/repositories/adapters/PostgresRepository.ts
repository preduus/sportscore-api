import { uuid } from 'uuidv4';
import { IRepository } from '../IRepository';

class PostgresRepository implements IRepository {
  constructor(private model: any) { }

  store(data: object) {
    Object.assign(data, { id: uuid() });
    return this.model.create(data);
  }

  exists(id: string) {
    return this.model.findOne({ where: { id } });
  }

  existsWhere(where: object) {
    return this.model.findOne({ where });
  }

  update(id: string, data: any) {
    return this.model.update(data, { where: { id } });
  }

  remove(id: string) {
    return this.model.destroy({ where: { id } });
  }

  findAll() {
    return this.model.findAll();
  }

  findById(id: string) {
    return this.model.findByPk(id);
  }

  findOneWhere(where: object) {
    return this.model.findAll({ where });
  }

  findAllWhere(where: object) {
    return this.model.findAll({ where });
  }
}

export default PostgresRepository;
