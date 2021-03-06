
import fs                 from 'fs'
import { join }           from 'path'
import _debug             from 'debug'
import mongoose           from 'mongoose'
import Promise            from 'bluebird'

import api_server_config  from '../server/api/config'
import connectDatabase    from '../server/api/tools/initialize/connectDatabase.js'
import Product              from '../server/api/models/product.js'

const debug = _debug('app:bin:populate-db')

debug(`Mongoose version: ${ mongoose.version }`)

;(async() => {
  try {
    const info = await connectDatabase(api_server_config.db_url);
    debug(`Database connected to ${info.host}:${info.port}/${info.name}`);
  } catch (error) {
    debug('Unable to connect to database');
    process.exit()
  }

  try {
    await Product.remove()
    debug("DB cleaned")
  } catch (error) {
    debug('Error at DB clean up', error)
    process.exit()
  }

  try {
    await populateDatabase()
    await mongoose.disconnect()
    debug('Popoulation finished successfully')
  } catch (error) {
    debug('Error on DB population', error)
    process.exit()
  }
})();

function populateDatabase () {
  const PLAIN_JSON_PATH = join(__dirname, '..', 'server/api/fixtures')

  let readDir = Promise.promisify(fs.readdir)
  let readFile = Promise.promisify(fs.readFile)

  return readDir(PLAIN_JSON_PATH)
  .then(files => {
    files = files.filter(file => file.indexOf('.json') != -1 ? true : false)

    return Promise.map(files, function(path) {
      let jsonPath = join(PLAIN_JSON_PATH, path)

      return readFile(jsonPath, 'utf8')
    })
  })
  .then(async (filePromiseArray) => {
    return Promise.each(filePromiseArray, async data => {
      let createdProduct = JSON.parse(data)
      let product = await Product.create(createdProduct)

      if (product) debug(`${ product.product_name } was created`);
    })
  })
}
