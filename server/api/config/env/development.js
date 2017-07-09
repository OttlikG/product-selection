
let config = {
  server: {
    host: 'localhost',
    port: '8000',
  },
  mongo: {
    host: 'localhost',
    db_name: 'csa_development',
    options: { socketOptions: { keepAlive: 1 } }
  },
};

config.db_url = `mongodb://${ config.mongo.host }/${ config.mongo.db_name }`;
config.server_url = `http://${ config.server.host }:${ config.server.port }`

export default config;
