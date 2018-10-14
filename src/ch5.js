// import _ from 'partial-js'
const _ = require('partial-js')
var add = _.callback(function (a, b, next) {
  setTimeout(function () {
    next(a + b)
  }, 1000)
})

var sub = _.callback(function (a, b, next) {
  setTimeout(function () {
    next(a - b)
  }, 1000)
})

var mul = _.callback(function (a, b, next) {
  setTimeout(function () {
    next(a * b)
  }, 1000)
})

var log = _.callback(function (msg, next) {
  setTimeout(function () {
    console.log(msg)
    next(msg)
  }, 1000)
})
_.go(_.mr(5, 10),
  add,
  _.partial(sub, _, 10),
  _.partial(mul, 1000),
  console.log)
