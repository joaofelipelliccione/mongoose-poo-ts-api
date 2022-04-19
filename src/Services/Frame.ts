import Frame, { FrameSchema } from '../Interfaces/Frame';
import Service, { ServiceError } from '.';
import FrameModel from '../Models/FrameModel';

class FrameService extends Service<Frame> {
  constructor(model = new FrameModel()) { // Alterando o atributo "model", que é "protected" na classe abstrata Service.
    super(model);
  }

  /*
  - Dentre todos os métodos implementados na classe abstrata Service,
  o único que precisou ser re-implementado foi o create().
  - Isso ocorre pois o método create() valida uma regra da negócio
  que não se aplica aos outros métodos.
  */
  create = async (obj: Frame): Promise<Frame | ServiceError | null> => {
    const parsed = FrameSchema.safeParse(obj); // É nesse ponto que as validações de tipo, n° de caracteres e campo, definidas com ajuda do Zod no FrameSchema, são realizadas.
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}

export default FrameService;
