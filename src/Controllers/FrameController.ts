import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import FrameService from '../Services/FrameService';

const INTERNAL_SERVER_ERROR = 'Internal Server Error';

class FrameController {
  /* Instanciado o objeto frameService a partir da classe FrameService,
  de forma que seja possível utilizar seus respectivos métodos públicos (Ex: readOne(), create()...). */
  constructor(private frameService = new FrameService()) {}

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { material, color } = req.body;

    try {
      const newFrame = await this.frameService.create({ material, color });
      if ('error' in newFrame) { // Erro oriundo do Zod.
        return res.status(StatusCodes.BAD_REQUEST)
          .json({ error: newFrame.error.issues[0].message });
      }

      return res.status(StatusCodes.OK).json(newFrame);
    } catch (e) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: INTERNAL_SERVER_ERROR });
    }
  };

  public read = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const allFrames = await this.frameService.read();
      return res.status(StatusCodes.OK).json(allFrames);
    } catch (e) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: INTERNAL_SERVER_ERROR });
    }
  };

  public readOne = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
  
    try {
      const frame = await this.frameService.readOne(id);
      if (frame === null) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: 'No frame with such id.' });
      }

      return res.status(StatusCodes.OK).json(frame);
    } catch (e) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: INTERNAL_SERVER_ERROR });
    }
  };
}

export default FrameController;
