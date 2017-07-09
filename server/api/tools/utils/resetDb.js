
import fs                 from 'fs'
import { join }           from 'path'
import mongoose           from 'mongoose'
import Promise            from 'bluebird'
import _debug             from 'debug'

import api_server_config  from '../../config'
import Plant              from '../../models/plant.js'
import { errorResponse }  from './utils'

const debug = _debug('app:server:tools:reset-db')

export async function resetDb () {
  try {
    await Plant.remove()
  } catch (error) {
    debug('Error at DB clean up', error)

    return errorResponse(error, {
      status: 500,
      detail: 'Error at DB clean up',
      source: {
        parameter: '/plants/_reset'
      }
    })
  }

  try {
    await populateDatabase()
    debug('Popoulation finished successfully')

    return {
      meta: {
        success: true,
        message: "Database reset have been finished successfully."
      }
    }
  } catch (error) {
    debug('Error on DB population', error)

    return errorResponse(error, {
      status: 500,
      detail: 'Error on DB population',
      source: {
        parameter: '/plants/_reset'
      }
    })
  }
}

function populateDatabase () {
  const PLAIN_JSON_PATH = join(__dirname, '../../../../', 'plant_data')

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
      let createdPlant = JSON.parse(data)
      let plant = await Plant.create(createdPlant)

      //if (plant) debug(`${ plant.common_name } was created`);
    })
  })
}
