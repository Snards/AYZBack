"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ 'Mensaje': 'La API esta en /api/public/...' });
    }
}
const indexController = new IndexController();
exports.default = indexController;
