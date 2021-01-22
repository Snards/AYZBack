import { Request, Response } from 'express';
import dbManager from '../config/dbManager';

class AreasPracticaController extends dbManager {
  public obtenerAreasParctica(req: Request, res: Response): Promise<any> {
    const cadena = 'select * from areas_de_practica';
    return AreasPracticaController.executeQuery(cadena, 'select', req, res);
  }

}
const areasPracticaController = new AreasPracticaController();
export default areasPracticaController;

