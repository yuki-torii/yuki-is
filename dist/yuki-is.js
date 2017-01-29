(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['yuki-is'] = factory());
}(this, (function () { 'use strict';

var type = {
  string: function string (value) {
    return toString.call(value) === '[object String]'
  },
  object: function object (value) {
    return Object(value) === value
  },
  null: function null$1 (value) {
    return value === null
  }
};

var navigator = window && window.navigator;
var appVersion = (navigator && navigator.appVersion || '').toLowerCase();
var userAgent$1 = (navigator && navigator.userAgent || '').toLowerCase();
var vendor = (navigator && navigator.vendor || '').toLowerCase();

var comparator = {
  '<': function (a, b) { return a < b },
  '<=': function (a, b) { return a <= b },
  '>': function (a, b) { return a > b },
  '>=': function (a, b) { return a >= b }
};

var utils = {
  navigator: navigator,
  appVersion: appVersion,
  userAgent: userAgent$1,
  vendor: vendor,
  compareVersion: function compareVersion (version, range) {
    var string = (range + '');
    var n = +(string.match(/\d+/) || NaN);
    var op = string.match(/^[<>]=?|/)[0];
    return comparator[op] ? comparator[op](version, n) : (version === n)
  }
};

var ref = utils;
var userAgent = ref.userAgent;
var compareVersion = ref.compareVersion;

var environment = {
  android: function android () {
    return /android/.test(userAgent)
  },
  androidPhone: function androidPhone () {
    return this.android() && this.mobile()
  },
  androidTablet: function androidTablet () {
    return this.android() && !this.mobile()
  },
  mobile: function mobile () {
    return /mobile/.test(userAgent)
  },
  ios: function ios () {
    return this.iphone() || this.ipad() || this.ipod()
  },
  iphone: function iphone (range) {
    var match = this.ipad() ? null : userAgent.match(/iphone(?:.+?os (\d+))?/);
    return match !== null && compareVersion(match[1] || 1, range)
  },
  ipad: function ipad (range) {
    var match = userAgent.match(/ipad.+?os (\d+)/);
    return match !== null && compareVersion(match[1], range)
  },
  ipod: function ipod (range) {
    var match = userAgent.match(/ipod.+?os (\d+)/);
    return match !== null && compareVersion(match[1], range)
  }
};

var index = {
  type: type,
  environment: environment
};

return index;

})));
