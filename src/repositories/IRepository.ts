export interface IRepository {
  store: (data: object) => Promise<any>;
  exists: (id: string) => Promise<any>;
  existsWhere: (where: object) => Promise<any>;
  update: (id: string, data: any) => Promise<any>;
  remove: (id: string) => Promise<any>;
  findAll: () => Promise<any>;
  findById: (id: string) => Promise<any>;
  findOneWhere: (where: object) => Promise<any>;
  findAllWhere: (where: object) => Promise<any>;
}
