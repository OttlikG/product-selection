
import importDir from 'import-dir';

const _ = require('lodash');
const fs = require('fs');
const { join } = require('path');
const env = process.env.NODE_ENV;

let api_config;

let defaults = {
  prefix: '/api',
  version: '/v1',
  api_secret: 'secret',
  log: {
    level: process.env.LOG_LEVEL || 'info'
  },
};

// Extend configs with defaults
fs.readdirSync(__dirname)
    .filter(file => ~file.indexOf('.js') && file !== 'index.js' )
    .forEach(file => {
      defaults = _.assignIn(require(join(__dirname, file)).default, defaults);
    });

if (Object.keys(importDir('./env')).includes(env)) {
  const envConfig = require('./env/' + env).default;
  api_config = _.merge(_.cloneDeep(defaults), envConfig);
} else {
  api_config = defaults;
}

export default api_config;
