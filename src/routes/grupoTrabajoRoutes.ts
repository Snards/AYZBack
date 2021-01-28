import { Router } from 'express';
import grupoTrabajoController from '../controller/grupoTrabajoController';

class GrupoTrabajoRouter {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config(){
        this.router.get('/', grupoTrabajoController.obtenerGruposTrabajo)
    }
}

const grupoTrabajoRouter = new GrupoTrabajoRouter;
export default grupoTrabajoRouter.router;