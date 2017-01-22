module.exports = {
  string (value) {
    return toString.call(value) === '[object String]'
  },
  object (value) {
    return Object(value) === value
  },
  null (value) {
    return value === null
  }
}
