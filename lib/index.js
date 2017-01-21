'use strict';

var is = {
  string: function string() {
    return toString.call(value) === '[object String]';
  },
  object: function object() {
    return Object(value) === value;
  },
  null: function _null() {
    return value === null;
  }
};

module.exports = is;
