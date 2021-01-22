"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbManager_1 = __importDefault(require("../config/dbManager"));
class AreaspracticasController extends dbManager_1.default {
    obtenerCursos(req, res) {
        const cadena = 'select * from cursos order by codcurso';
        return AreaspracticasController.executeQuery(cadena, 'select', req, res);
    }
    cursoSleccionado() {
        const cadena = 'select * from cursos';
    }
}
const AreaspracticasController = new AreaspracticasController();
exports.default = AreaspracticasController;
