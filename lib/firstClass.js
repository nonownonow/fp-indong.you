"use strict";

var f1 = function f1(a, b) {
  return a + b;
};

console.log(f1(1, 2));
var f2 = f1;
console.log(f2(5, 3));

function f3(f) {
  return f();
}

console.log(f3(function () {
  return 10;
}));
console.log(f3(function () {
  return 30;
}));

function add_maker(a) {
  return function (b) {
    return a + b;
  };
}

var add3 = add_maker(3);
var add10 = add_maker(10);
console.log(add3(2));
console.log(add10(9));

function f4(f1, f2, f3) {
  return f3(f1() + f2());
}

console.log(f4(function () {
  return 1;
}, function () {
  return 3;
}, function (a) {
  return a * a;
}));
//# sourceMappingURL=firstClass.js.map