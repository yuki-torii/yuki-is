'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./type');

Object.keys(_type).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _type[key];
    }
  });
});