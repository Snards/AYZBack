import { Request, Response } from 'express';
import dbManager  from '../config/dbManager';

class GrupoTrabajoController extends dbManager{
    /**
     * obtenerGruposTrabajo
     */
    public obtenerGruposTrabajo(req: Request, res: Response): Promise <any> {
        const cadena =' select * from grupo_de_trabajo';
        return GrupoTrabajoController.executeQuery(cadena, 'select', req, res);
    }
}
const grupoTrabajoController = new GrupoTrabajoController();
export default grupoTrabajoController;