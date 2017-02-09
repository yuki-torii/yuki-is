const utils = require('./utils')

module.exports = {
  string (value) {
    return utils.toString.call(value) === '[object String]'
  },
  object (value) {
    return Object(value) === value
  },
  null (value) {
    return value === null
  },
  array: (value) => {
    return utils.toString.call(value) === '[object Array]'
  }
}
