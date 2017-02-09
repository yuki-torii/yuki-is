var navigator = window && window.navigator;
var appVersion = (navigator && navigator.appVersion || '').toLowerCase();
var userAgent = (navigator && navigator.userAgent || '').toLowerCase();
var vendor = (navigator && navigator.vendor || '').toLowerCase();

var comparator = {
  '<': function (a, b) { return a < b },
  '<=': function (a, b) { return a <= b },
  '>': function (a, b) { return a > b },
  '>=': function (a, b) { return a >= b }
};

var utils$1 = {
  toString: Object.prototype.toString,
  navigator: navigator,
  appVersion: appVersion,
  userAgent: userAgent,
  vendor: vendor,
  compareVersion: function compareVersion (version, range) {
    var string = (range + '');
    var n = +(string.match(/\d+/) || NaN);
    var op = string.match(/^[<>]=?|/)[0];
    return comparator[op] ? comparator[op](version, n) : (version === n)
  }
};

var utils = utils$1;

var type = {
  string: function string (value) {
    return utils.toString.call(value) === '[object String]'
  },
  object: function object (value) {
    return Object(value) === value
  },
  null: function null$1 (value) {
    return value === null
  },
  array: function (value) {
    return utils.toString.call(value) === '[object Array]'
  }
};

var ref = utils$1;
var userAgent$1 = ref.userAgent;
var compareVersion = ref.compareVersion;

var environment = {
  android: function android () {
    return /android/.test(userAgent$1)
  },
  androidPhone: function androidPhone () {
    return this.android() && this.mobile()
  },
  androidTablet: function androidTablet () {
    return this.android() && !this.mobile()
  },
  mobile: function mobile () {
    return /mobile/.test(userAgent$1)
  },
  ios: function ios () {
    return this.iphone() || this.ipad() || this.ipod()
  },
  iphone: function iphone (range) {
    var match = this.ipad() ? null : userAgent$1.match(/iphone(?:.+?os (\d+))?/);
    return match !== null && compareVersion(match[1] || 1, range)
  },
  ipad: function ipad (range) {
    var match = userAgent$1.match(/ipad.+?os (\d+)/);
    return match !== null && compareVersion(match[1], range)
  },
  ipod: function ipod (range) {
    var match = userAgent$1.match(/ipod.+?os (\d+)/);
    return match !== null && compareVersion(match[1], range)
  }
};

var index = {
  type: type,
  environment: environment
};

export default index;
