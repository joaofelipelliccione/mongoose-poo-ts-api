import { Model as M, Document } from 'mongoose';
import Model from '.';

/*
- É importante pontuar que os métodos declarados na classe abstrata "pai" poderão ser sobrescritos no escopo das classes "filhas".
- Ao criar o MongoModel, não há mais necessidades de criar métodos CRUD para cada coleção, tendo em vista que todos os models serão oriundos desse.
*/
abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { } // O "protected", permite a alteração de um atributo dentro de uma classe filha da classe abstrata MongoModel.

  create = async (obj: T): Promise<T> => this.model.create({ ...obj }); // Função create(), do mongoose.

  read = async (): Promise<T[]> => this.model.find(); // Função find(), do mongoose.

  readOne = async (id: string): Promise<T | null> => // Função findOne(), do mongoose.
    this.model.findOne({ _id: id });

  // update = async (): Promise<T[]> => {
  //   await this.model.updateMany();
  //   return this.model.find();
  // };
  
  // delete = async (id: string): Promise<T | null> =>
  //   this.model.findOneAndDelete({ _id: id });
}

export default MongoModel;
