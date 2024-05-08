"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const counters_module_1 = require("./counters/counters.module");
const logger_middleware_1 = require("./common/middleware/logger/logger.middleware");
const counters_controller_1 = require("./counters/counters.controller");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_1 = require("../DB/data-source");
const events_gateway_1 = require("./events/events.gateway");
const events_module_1 = require("./events/events.module");
const events_service_1 = require("./events/events.service");
const games_module_1 = require("./games/games.module");
const games_controller_1 = require("./games/games.controller");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes(counters_controller_1.CountersController, games_controller_1.GamesController);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(data_source_1.dataSourceOptions),
            counters_module_1.CountersModule,
            events_module_1.EventsModule,
            games_module_1.GamesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, events_gateway_1.EventsGateway, events_service_1.EventsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map