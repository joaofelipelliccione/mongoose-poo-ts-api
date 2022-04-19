import { ZodError } from 'zod';
import Model from '../Models';

// Criação de uma interface de erro, tendo em vista que o retorno de alguns métodos de Service, poderão ser erros lançados pelo Zod.
export interface ServiceError {
  error: ZodError;
}

/*
- Caso seja necessário a realização de regras de negócio em algum dos métodos (create, read, readOne...),
elas devem ser feitas nas classes filhas da classe abstrata Service, sobrescrevendo os métodos. 
*/
abstract class Service<T> {
  constructor(protected model: Model<T>) { }

  public async create(obj: T): Promise<T | ServiceError> {
    return this.model.create(obj);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }
}

export default Service;
