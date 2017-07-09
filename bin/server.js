
import _debug from 'debug'
const debug = _debug('app:bin:server')

// API server
// TODO: Why can't I obtain these specific properties: { api_secret, db_url }
import api_server_config from '../server/api/config'
import api_server from '../server/api/apiServer.js'
import connectDatabase from '../server/api/tools/initialize/connectDatabase.js'

// App server
import config from '../config'
import server from '../server/main'
const port = config.server_port
const host = config.server_host

;(async() => {
  try {
    const info = await connectDatabase(api_server_config.db_url);
    debug(`Database connected to ${info.host}:${info.port}/${info.name}`);
  } catch (error) {
    debug('Unable to connect to database');
  }

  try {
    //Start api server
    await api_server.listen(api_server_config.server.port);
    debug(`API server is now running at ${ api_server_config.server_url }.`)

    //Start app server
    await server.listen(port);
    debug(`Server is now running at http://${ host }:${ port }.`)
  } catch (error) {
    console.log(error);
  }
})();
