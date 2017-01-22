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

var index = {
  type: type
};

return index;

})));
