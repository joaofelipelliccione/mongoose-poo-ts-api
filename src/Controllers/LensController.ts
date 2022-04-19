import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LensService from '../Services/LensService';

const INTERNAL_SERVER_ERROR = 'Internal Server Error';

class LensController {
  constructor(private lensService = new LensService()) {}

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { degree, antiGlare, blueLightFilter } = req.body;

    try {
      const newLen = await this.lensService.create({ degree, antiGlare, blueLightFilter });
      if ('error' in newLen) { // Erro oriundo do Zod.
        return res.status(StatusCodes.BAD_REQUEST)
          .json({ error: newLen.error.issues[0].message });
      }

      return res.status(StatusCodes.OK).json(newLen);
    } catch (e) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: INTERNAL_SERVER_ERROR });
    }
  };

  public read = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const allLens = await this.lensService.read();
      return res.status(StatusCodes.OK).json(allLens);
    } catch (e) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: INTERNAL_SERVER_ERROR });
    }
  };

  public readOne = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
  
    try {
      const lens = await this.lensService.readOne(id);
      if (lens === null) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: 'No lens with such id.' });
      }

      return res.status(StatusCodes.OK).json(lens);
    } catch (e) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: INTERNAL_SERVER_ERROR });
    }
  };
}

export default LensController;
