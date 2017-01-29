const {
  userAgent,
  compareVersion
} = require('utils')

module.exports = {
  android () {
    return /android/.test(userAgent)
  },
  androidPhone () {
    return this.android() && this.mobile()
  },
  androidTablet () {
    return this.android() && !this.mobile()
  },
  mobile () {
    return /mobile/.test(userAgent)
  },
  ios () {
    return this.iphone() || this.ipad() || this.ipod()
  },
  iphone (range) {
    var match = this.ipad() ? null : userAgent.match(/iphone(?:.+?os (\d+))?/)
    return match !== null && compareVersion(match[1] || 1, range)
  },
  ipad (range) {
    var match = userAgent.match(/ipad.+?os (\d+)/)
    return match !== null && compareVersion(match[1], range)
  },
  ipod (range) {
    var match = userAgent.match(/ipod.+?os (\d+)/)
    return match !== null && compareVersion(match[1], range)
  }
}
