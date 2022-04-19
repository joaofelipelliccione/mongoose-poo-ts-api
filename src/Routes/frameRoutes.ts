import { Router } from 'express';
import FrameController from '../Controllers/FrameController';

const frameController = new FrameController(); // Instancia um novo objeto a partir da classe controller, possibilitando a utilização de seus respectivos métodos.
const frameRoutes = Router();

frameRoutes.get('/', frameController.read);
frameRoutes.get('/:id', frameController.readOne);
frameRoutes.post('/new', frameController.create);

export default frameRoutes;
