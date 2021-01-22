"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conn_1 = __importDefault(require("./conn"));
class DbManager {
    static async executeQuery(sql, type, parameters, res) {
        conn_1.default.query(sql, parameters, function (error, result) {
            if (error) {
                res.status(400).json({ 'Mensaje error': error });
                return false;
            }
            switch (type.toLowerCase()) {
                case 'select':
                    res.status(200).json(result);
                    break;
                default:
                    res.status(400).json({ 'Mensaje': 'Servicio no disponible.' });
                    break;
            }
        });
    }
}
exports.default = DbManager;
