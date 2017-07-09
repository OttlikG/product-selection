
import mongoose           from 'mongoose'
import _debug             from 'debug'

const debug = _debug('app:server:init:connect-db')

export default function connectDatabase(uri, options) {
  return new Promise((resolve, reject) => {
    mongoose.connection
        .on('error', error => reject(error))
        .on('close', () => debug('Database connection closed.'))
        .once('open', () => resolve(mongoose.connections[0]));

    mongoose.connect(uri, options);
  });
}
