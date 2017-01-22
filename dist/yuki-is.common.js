'use strict';

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

module.exports = index;
