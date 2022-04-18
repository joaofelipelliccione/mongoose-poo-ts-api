import { connect } from 'mongoose';

const connection = (uri: string) => { // Formato URI: mongodb://localhost:27017/database_name
  try {
    connect(uri, { autoIndex: false }); // Não cria index para cada inserção de dado no banco (Recomendado pelo Mongoose).
    console.log(`Conectado ao mongodb em: ${uri}`);
  } catch (error) {
    console.log(error);
  }
};

export default connection;
