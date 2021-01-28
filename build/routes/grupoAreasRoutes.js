"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupoAreasController_1 = __importDefault(require("../controller/grupoAreasController"));
class GrupoAreasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', grupoAreasController_1.default.obtenerGruposAreas);
        this.router.get('/abogado', grupoAreasController_1.default.filtroGruposAbogado);
        this.router.get('/ingeniero', grupoAreasController_1.default.filtroGruposIngeniro);
        this.router.get('/tecnico', grupoAreasController_1.default.filtroGrupoTecnico);
    }
}
const grupoAreasRoutes = new GrupoAreasRoutes();
exports.default = grupoAreasRoutes.router;
