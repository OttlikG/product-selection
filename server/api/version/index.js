
import compose from 'koa-compose';
import Router from 'koa-router';
import importDir from 'import-dir';
// TODO: Why can't I obtain these specific properties: { version, prefix }
import api_config from '../config/index.js';

const routes = importDir(`./${api_config.version}/routes`);

export default function api() {
  const router = new Router({ prefix: api_config.prefix + api_config.version });

  Object.keys(routes).forEach(name => routes[name](router));

  return compose([
    router.routes(),
    router.allowedMethods(),
  ]);
}
