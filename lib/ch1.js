"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;
exports.findById = findById;
exports.findByName = findByName;
exports.findByAge = findByAge;
exports.findBy = findBy;
exports.find = find;
exports.map = map;
exports.filterUnder30AgeSize = filterUnder30AgeSize;
exports.filterUnder30AgeSize2 = filterUnder30AgeSize2;
exports.mapName30andOverUsersSize = mapName30andOverUsersSize;

function filter(arr, predicate) {
  var newArr = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    var el = arr[i];
    if (predicate(el)) newArr.push(el);
  }

  return newArr;
}

function findById(list, id) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i].id === id) return list[i];
  }
}

function findByName(list, name) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i].name === name) return list[i];
  }
}

function findByAge(list, age) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i].age === age) return list[i];
  }
}

function findBy(key, list, value) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i][key] === value) return list[i];
  }
}

function find(arr, predicate) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
}

function map(arr, mapper) {
  var newArr = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(mapper(arr[i]));
  }

  return newArr;
}

function filterUnder30AgeSize(users) {
  return get_length(map(filter(users, function (v) {
    return v.age < 30;
  }), bValue('age')));
}

function filterUnder30AgeSize2(users) {
  return get_length(bValues('age')(filter(users, under_30)));

  function under_30(v) {
    return v.age < 30;
  }
}

function mapName30andOverUsersSize(users) {
  return get_length(map(filter(users, function (v) {
    return v.age >= 30;
  }), bValue('name')));
}

function get_length(arr) {
  return arr.length;
}

function bValue(key) {
  return function (obj) {
    return obj[key];
  };
}

function bValues(key) {
  return function (obj) {
    return map(obj, bValue(key));
  };
}
//# sourceMappingURL=ch1.js.map