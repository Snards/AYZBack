"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbManager_1 = __importDefault(require("../config/dbManager"));
class AreasPracticaController extends dbManager_1.default {
    obtenerAreasParctica(req, res) {
        const cadena = 'select * from areas_de_practica';
        return AreasPracticaController.executeQuery(cadena, 'select', req, res);
    }
}
const areasPracticaController = new AreasPracticaController();
exports.default = areasPracticaController;
