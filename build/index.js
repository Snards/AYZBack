"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const areasPracticasRoutes_1 = __importDefault(require("./routes/areasPracticasRoutes"));
class Serve {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('PORT', process.env.PORT || 3000);
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/public/areasPracticas', areasPracticasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('Servicio activo en el puerto ' + this.app.get('PORT'));
        });
    }
}
const server = new Serve();
server.start();
