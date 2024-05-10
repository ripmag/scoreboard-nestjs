"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const merge = require('deepmerge');
let envConfig = {};
try {
    envConfig = require(`./config/AppConfig.${process.env.NODE_ENV}.js`);
}
catch (e) { }
const AppConfig = merge({
    DB_HOST: '',
    APP_LISTEN_PORT: 3000
}, envConfig, { arrayMerge: (dest, source) => source });
exports.AppConfig = AppConfig;
exports.default = AppConfig;
//# sourceMappingURL=AppConfig.js.map