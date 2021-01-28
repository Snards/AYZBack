import { Request, Response } from 'express';
import dbManager from '../config/dbManager';

class GrupoAreasController extends dbManager {
    
    /**
     * obtenerGruposAreas
     */
    public obtenerGruposAreas(req: Request, res: Response): Promise <any> {
        const cadena = 'select * from grupo_areas';
        return GrupoAreasController.executeQuery(cadena, 'select', req, res);
    }

    /**
     * filtroGruposAreas
    */
    public filtroGruposAbogado(req: Request, res: Response): Promise <any> {
        const cadena = 'select id_grupo_de_trabajo from grupo_areas where id_grupo_de_trabajo = 1';
        return GrupoAreasController.executeQuery(cadena, 'select', req, res);
    }

    /**
     * FiltroGruposPracticas
     */
    public filtroGruposIngeniro( req: Request, res: Response): Promise <any> {
        const cadena = 'select id_grupo_de_trabajo from grupo_areas where id_grupo_de_trabajo = 2';
        return GrupoAreasController.executeQuery(cadena, 'select', req, res);
    }

    /**
     * filtroGrupoTeecnico
     */
    public filtroGrupoTecnico(req: Request, res: Response) {
        const cadena = 'select id_grupo_de_trabajo from grupo_areas where id_grupo_de_trabajo = 1';
        return GrupoAreasController.executeQuery(cadena, 'select', req, res);
    }
} 

const grupoAreasController = new GrupoAreasController();
export default grupoAreasController;