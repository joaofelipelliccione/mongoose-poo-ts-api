import express from 'express';
import connection from './Models/connection';

import pingRoutes from './Routes/pingRoutes';
import frameRoutes from './Routes/frameRoutes';

class App {
  public app: express.Express;

  public connection: void;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.connection = connection('mongodb://localhost:27017/eye_shop'); // Método responsável pelo estabelecimento da conexão com o banco.
  }

  private middlewares(): void { // Método com as configurações necessárias p/ funcionamento da API.
    this.app.use(express.json());
  }

  private routes(): void { // Método responsável pela disponibilização das rotas da API.
    this.app.use('/ping', pingRoutes);
    this.app.use('/frame', frameRoutes);
  }

  public start(PORT: string | number): void { // Método que "sobe" o servidor. Esse que será chamado no arquivo server.ts
    this.app.listen(PORT, () => console.log(`Up and running at http://localhost:${PORT}/ping :)`));
  }
}

export default App;
