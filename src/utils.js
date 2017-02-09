var navigator = window && window.navigator
var appVersion = (navigator && navigator.appVersion || '').toLowerCase()
var userAgent = (navigator && navigator.userAgent || '').toLowerCase()
var vendor = (navigator && navigator.vendor || '').toLowerCase()

const comparator = {
  '<': (a, b) => { return a < b },
  '<=': (a, b) => { return a <= b },
  '>': (a, b) => { return a > b },
  '>=': (a, b) => { return a >= b }
}

module.exports = {
  toString: Object.prototype.toString,
  navigator,
  appVersion,
  userAgent,
  vendor,
  compareVersion (version, range) {
    var string = (range + '')
    var n = +(string.match(/\d+/) || NaN)
    var op = string.match(/^[<>]=?|/)[0]
    return comparator[op] ? comparator[op](version, n) : (version === n)
  }
}
