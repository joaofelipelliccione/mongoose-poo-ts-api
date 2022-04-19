import { Router } from 'express';
import LensController from '../Controllers/LensController';

const lensController = new LensController(); // Instancia um novo objeto a partir da classe controller, possibilitando a utilização de seus respectivos métodos.
const frameRoutes = Router();

frameRoutes.get('/', lensController.read);
frameRoutes.get('/:id', lensController.readOne);
frameRoutes.post('/new', lensController.create);

export default frameRoutes;
