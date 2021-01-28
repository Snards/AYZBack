import { Router } from 'express';
import grupoAreasController from '../controller/grupoAreasController';

class GrupoAreasRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', grupoAreasController.obtenerGruposAreas);
        this.router.get('/abogado', grupoAreasController.filtroGruposAbogado);
        this.router.get('/ingeniero', grupoAreasController.filtroGruposIngeniro);
        this.router.get('/tecnico', grupoAreasController.filtroGrupoTecnico);
    }
}

const grupoAreasRoutes = new GrupoAreasRoutes();
export default grupoAreasRoutes.router;