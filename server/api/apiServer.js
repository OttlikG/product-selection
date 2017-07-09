
import _debug from 'debug'
const debug = _debug('app:server:api')

import Koa from 'koa';
import middleware from './tools/middleware';
//import auth from './auth';
import api from './version';
import api_server_config from './config'

const api_server = new Koa();

api_server.keys = [ api_server_config.api_secret ];

api_server.use(middleware());
//app.use(auth());
api_server.use(api());
api_server.use(ctx => ctx.status = 404);

export default api_server;
