"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ 'Mensaje': 'La API para equipos esta en /api/public/cursos' });
    }
}
const indexController = new IndexController();
exports.default = indexController;
