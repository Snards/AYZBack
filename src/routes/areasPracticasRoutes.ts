import { Router } from 'express';
import areasPracticaController from '../controller/areasPracticaController';

class AreaPracticasRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', areasPracticaController.obtenerAreasParctica);
    }
}

const areaPracticasRoutes = new AreaPracticasRoutes();
export default areaPracticasRoutes.router;