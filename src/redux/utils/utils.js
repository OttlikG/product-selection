
import { at }                   from 'lodash'

export function getOnPath (object, path, defaultValue = '-') {
  return at(object, path)[0] || defaultValue
}
