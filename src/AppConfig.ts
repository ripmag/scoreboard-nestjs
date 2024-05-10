// import deepmerge from "deepmerge";
const merge = require('deepmerge');
let envConfig = {};

try {
    envConfig = require(`./config/AppConfig.${process.env.NODE_ENV}.js`);
    
} catch (e) {}

const AppConfig = merge( {
    DB_HOST: '',
    APP_LISTEN_PORT: 3000
}, envConfig, { arrayMerge: (dest, source) => source });

export { AppConfig };
export default AppConfig;
