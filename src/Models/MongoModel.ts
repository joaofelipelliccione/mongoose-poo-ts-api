import { Model as M, Document } from 'mongoose';
import Model from '.';

/*
- Classes abstratas são aquelas que declaram métodos abstratos, ou seja, métodos que apresentam função definida na classe abstrata "pai",
mas que poderão ser sobrescritos no escopo das classes "filhas".
- Ao criar o MongoModel, não há mais necessidades de criar métodos CRUD para cada coleção. Todos os models serão oriundos desse.
*/
abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { } // O "protected", permite a alteração de um atributo dentro de uma classe filha da classe abstrata MongoModel.

  create = async (obj: T): Promise<T> => this.model.create({ ...obj }); // Função create(), do mongoose.

  read = async (): Promise<T[]> => this.model.find(); // Função find() [similar à findAll()], do mongoose.

  readOne = async (id: string): Promise<T | null> => // Função findOne(), do mongoose.
    this.model.findOne({ _id: id });

  // update

  // delete
}

export default MongoModel;
