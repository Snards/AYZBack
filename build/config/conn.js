"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection(function (err, connection) {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Conexión con la base de datos perdida');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Conexión rechazada');
        }
    }
    if (connection) {
        console.log('Conexión realizada: ', keys_1.default.database.database);
        connection.release();
    }
});
exports.default = pool;
