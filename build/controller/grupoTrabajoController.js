"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbManager_1 = __importDefault(require("../config/dbManager"));
class GrupoTrabajoController extends dbManager_1.default {
    /**
     * obtenerGruposTrabajo
     */
    obtenerGruposTrabajo(req, res) {
        const cadena = ' select * from grupo_de_trabajo';
        return GrupoTrabajoController.executeQuery(cadena, 'select', req, res);
    }
}
const grupoTrabajoController = new GrupoTrabajoController();
exports.default = grupoTrabajoController;
