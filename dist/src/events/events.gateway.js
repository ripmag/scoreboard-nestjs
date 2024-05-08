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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const events_service_1 = require("./events.service");
const create_counter_dto_1 = require("../counters/dto/create-counter-dto");
let EventsGateway = class EventsGateway {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    handleMessage(client, payload) {
        const createCounterDTO = new create_counter_dto_1.CreateCounterDTO();
        return 'Hello world!';
    }
};
exports.EventsGateway = EventsGateway;
__decorate([
    (0, websockets_1.SubscribeMessage)('message2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], EventsGateway.prototype, "handleMessage", null);
exports.EventsGateway = EventsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3002, {
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], EventsGateway);
//# sourceMappingURL=events.gateway.js.map