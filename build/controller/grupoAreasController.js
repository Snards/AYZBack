"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbManager_1 = __importDefault(require("../config/dbManager"));
class GrupoAreasController extends dbManager_1.default {
    /**
     * obtenerGruposAreas
     */
    obtenerGruposAreas(req, res) {
        const cadena = 'select * from grupo_areas';
        return GrupoAreasController.executeQuery(cadena, 'select', req, res);
    }
    /**
     * filtroGruposAreas
    */
    filtroGruposAbogado(req, res) {
        const cadena = 'select id_grupo_de_trabajo from grupo_areas where id_grupo_de_trabajo = 1';
        return GrupoAreasController.executeQuery(cadena, 'select', req, res);
    }
    /**
     * FiltroGruposPracticas
     */
    filtroGruposIngeniro(req, res) {
        const cadena = 'select id_grupo_de_trabajo from grupo_areas where id_grupo_de_trabajo = 2';
        return GrupoAreasController.executeQuery(cadena, 'select', req, res);
    }
    /**
     * filtroGrupoTeecnico
     */
    filtroGrupoTecnico(req, res) {
        const cadena = 'select id_grupo_de_trabajo from grupo_areas where id_grupo_de_trabajo = 1';
        return GrupoAreasController.executeQuery(cadena, 'select', req, res);
    }
}
const grupoAreasController = new GrupoAreasController();
exports.default = grupoAreasController;
