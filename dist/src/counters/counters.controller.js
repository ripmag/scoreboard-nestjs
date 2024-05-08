"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountersController = void 0;
const common_1 = require("@nestjs/common");
const counters_service_1 = require("./counters.service");
const create_counter_dto_1 = require("./dto/create-counter-dto");
let CountersController = class CountersController {
    constructor(countersService) {
        this.countersService = countersService;
    }
    createCounter(createCounterDTO) {
        return this.countersService.create(createCounterDTO);
    }
    getAllCounters() {
        try {
            return this.countersService.getAll();
        }
        catch (error) {
            throw new common_1.HttpException('Emulate error get data', common_1.HttpStatus.INTERNAL_SERVER_ERROR, { cause: error });
        }
    }
    fineOne(id) {
        return `get by ID - ${typeof id}`;
    }
};
exports.CountersController = CountersController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_counter_dto_1.CreateCounterDTO]),
    __metadata("design:returntype", void 0)
], CountersController.prototype, "createCounter", null);
__decorate([
    (0, common_1.Get)('getAllCounters'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CountersController.prototype, "getAllCounters", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CountersController.prototype, "fineOne", null);
exports.CountersController = CountersController = __decorate([
    (0, common_1.Controller)('counters'),
    __metadata("design:paramtypes", [counters_service_1.CountersService])
], CountersController);
//# sourceMappingURL=counters.controller.js.map