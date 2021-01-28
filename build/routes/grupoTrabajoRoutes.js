"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupoTrabajoController_1 = __importDefault(require("../controller/grupoTrabajoController"));
class GrupoTrabajoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', grupoTrabajoController_1.default.obtenerGruposTrabajo);
    }
}
const grupoTrabajoRouter = new GrupoTrabajoRouter;
exports.default = grupoTrabajoRouter.router;
