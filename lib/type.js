'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  string: function string(value) {
    return toString.call(value) === '[object String]';
  },
  object: function object(value) {
    return Object(value) === value;
  },
  null: function _null(value) {
    return value === null;
  }
};