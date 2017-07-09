
import Promise                  from 'bluebird'

export default {
  find: confObj => {
    if (confObj._id === 'aaa') {
      return Promise.resolve({ id: 'LONDON' })
    } else {
      return Promise.resolve({})
    }
  }
}