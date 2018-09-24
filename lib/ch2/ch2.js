"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objFunction = objFunction;
exports.measureTime = measureTime;
exports.fn2 = fn2;
exports.hoisting = hoisting;
exports.hoisting2 = hoisting2;
exports.iifs = exports.method = exports.fn1 = exports.obj14 = exports.obj13 = exports.arr = exports.obj = void 0;

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var a = true;
var obj = (_obj = {
  a: 1,
  'b': 2
}, _defineProperty(_obj, a ? 'true' : 'false', true), _defineProperty(_obj, 3, '3'), _obj);
exports.obj = obj;
obj.c = 3;
obj['d'] = 4;
obj['e e'] = 5;

function f(key) {
  return key;
}

obj[f('f')] = 6;
objFunction.a = 1;
objFunction.b = 2;
objFunction.c = objFunction.a + objFunction.b;

function objFunction() {
  return 'objFunction';
}

var arr = [];
exports.arr = arr;
arr['a'] = 1;
arr[1] = 2;

function measureTime(fn) {
  var start = new Date();

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  fn.apply(void 0, args);
  var end = new Date();
  return end.getTime() - start.getTime();
}

var obj13 = [1, 2];
exports.obj13 = obj13;
obj13[5] = 5;
obj13.push(6);
obj13['len' + 'gth'] = 10;
obj13.push(11);
var obj14 = {
  a: 1,
  b: 2,
  c: 3
};
exports.obj14 = obj14;
delete obj14.a;
delete obj14['b'];
delete obj14['C'.toLowerCase()];

var fn1 = function fn1() {
  return 'fn';
};

exports.fn1 = fn1;

function fn2() {
  return 'fn2';
}

var method = {
  fn3: function fn3() {
    return 'fn3';
  }
};
exports.method = method;

function hoisting() {
  str = 'hoisting';
  return identity(str);
  var str;

  function identity(value) {
    return value;
  }
}

function hoisting2() {
  str = 'hoisting';
  return identity(str);
  var str;

  var identity = function identity(value) {
    return value;
  };
}

var iifs = [];
exports.iifs = iifs;
var i = 0;
!function () {
  iifs[i] = "iif".concat(i++);
}();
true || function () {
  iifs[i] = "iif".concat(i++);
};
//# sourceMappingURL=ch2.js.map