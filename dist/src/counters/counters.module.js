"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountersModule = void 0;
const common_1 = require("@nestjs/common");
const counters_controller_1 = require("./counters.controller");
const counters_service_1 = require("./counters.service");
const typeorm_1 = require("@nestjs/typeorm");
const counter_entity_1 = require("./counter.entity");
let CountersModule = class CountersModule {
};
exports.CountersModule = CountersModule;
exports.CountersModule = CountersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([counter_entity_1.Counter])],
        controllers: [counters_controller_1.CountersController],
        providers: [
            counters_service_1.CountersService,
        ],
        exports: [counters_service_1.CountersService],
    })
], CountersModule);
//# sourceMappingURL=counters.module.js.map