
import { at }                   from 'lodash'

export function getOnPath (object, path, defaultValue = '-') {
  return at(object, path)[0] || defaultValue
}

export function union (array, item) {
  return !array.includes(item) ? [...array, item] : array
}

export function toggle (array, item) {
  return array.includes(item)
    ? array.filter(i => i !== item)
    : [...array, item]
}
