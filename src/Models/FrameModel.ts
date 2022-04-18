import { Schema, model as createModel, Document } from 'mongoose';
import Frame from '../Interfaces/Frame';
import MongoModel from './MongoModel';

/*
- A interface abaixo deve ser criada pois, todo schema, deve apresentar um tipo que respeite
não só o tipo do model a ser criado, como também do Document oriundo do mongoose.
*/
interface FrameDocument extends Frame, Document { }

const frameSchema = new Schema<FrameDocument>({
  material: String,
  color: String,
});

class FrameModel extends MongoModel<Frame> { // Instanciando a classe FrameModel, a partir da classe abstrata MongoModel.
  constructor(model = createModel('Frames', frameSchema)) {
    super(model);
  }
}

export default FrameModel;
