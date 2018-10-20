import { map } from './ch1'

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
  _.partial(mul, 1000)
)

export function pluck (data, key) {
  return _.map(data, v => v[key])
}

export function reject (data, fn) {
  return _.filter(data, _.negate(fn))
}

export function difference (data, target) {
  return _.reject(data, v => _.contains(target, v))
}

export function compact () {
  return _.filter(_.identity)(...arguments)
}

export function group_by (data, fn) {
  return _.reduce(data, (r, v, k, c) => {
    const key = fn(v, k, c)
    _.has(r, key) ? r[key].push(v) : r[key] = [v]
    return r
  }, {})
}

export function some (data, fn = _.idtt) {
  let res = false
  _.find(data, v => res = !!fn(v))
  return res
}
