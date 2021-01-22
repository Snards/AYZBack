"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosController_1 = __importDefault(require("../controller/cursosController"));
class CursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cursosController_1.default.obtenerCursos);
    }
}
const cursosRoutes = new CursosRoutes();
exports.default = cursosRoutes.router;
