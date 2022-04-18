/*
- Tal interface recebe um genérico (T) pois ela será utilizada na criação da classe abstrata MongoModel,
que será o ponto de partida para se criar os models da aplicação.
*/
interface Model<T> { // É importante lembrar que, em interfaces, os métodos nunca deverão ser implementados, apenas definidos.
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(id_: string): Promise<T | null>,
  // update(): Promise<T[]>,
  // delete(id: string): Promise<T | null>,
}

export default Model;
