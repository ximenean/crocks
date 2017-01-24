/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const curry = require('../helpers/curry')

const isString = require('./isString')
const isInteger = require('./isInteger')

// hasKey : (String | Number) -> a -> Boolean
function hasKey(key, x) {
  if(!(isString(key) || isInteger(key))) {
    throw new TypeError('has: Number or String required for first argument')
  }

  return (!!x && x[key] !== undefined)
}

module.exports = curry(hasKey)
