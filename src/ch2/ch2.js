import * as _ from 'underscore'
const a = true
export const obj = {
  a: 1,
  'b': 2,
  [a ? 'true' : 'false']: true,
  3: '3'
}
obj.c = 3
obj['d'] = 4
obj['e e'] = 5
function f (key) {
  return key
}
obj[f('f')] = 6

objFunction.a = 1
objFunction.b = 2
objFunction.c = objFunction.a + objFunction.b
export function objFunction () {
  return 'objFunction'
}

export const arr = []
arr['a'] = 1
arr[1] = 2

export function measureTime (fn, ...args) {
  const start = new Date()
  fn(...args)
  const end = new Date()
  return end.getTime() - start.getTime()
}

export function measureTime_perfomance (testSize) {
  return function (fn) {
    return measureTime(function () {
      for (let i = 0; i < testSize; i++) {
        fn()
      }
    })
  }
}

export const obj13 = [1, 2]
obj13[5] = 5
obj13.push(6)
obj13['len' + 'gth'] = 10
obj13.push(11)

export const obj14 = { a: 1, b: 2, c: 3 }
delete obj14.a
delete obj14['b']
delete obj14['C'.toLowerCase()]

export const fn1 = function () {
  return 'fn'
}
export function fn2 () {
  return 'fn2'
}

export const method = {
  fn3 () {
    return 'fn3'
  }
}

export function hoisting () {
  str = 'hoisting'
  return identity(str)
  var str
  function identity (value) {
    return value
  }
}

export function hoisting2 () {
  str = 'hoisting'
  return identity(str)
  var str
  var identity = function (value) {
    return value
  }
}

export let iifs = Array(8)
let i = 0

!function () {
  iifs[i] = `iif${i++}`
}()

true && function () {
  iifs[i] = `iif${i++}`
}()

1 ? function () {
  iifs[i] = `iif${i++}`
}() : 0

0, function () {
  iifs[i] = `iif${i++}`
}()

iifs[i] = function () {
  return `iif${i++}`
}()

iifTest()
function iifTest () {
  return function () {
    iifs[i] = `iif${i++}`
  }()
}

fn3(function () {
  iifs[i] = `iif${i++}`
}())
function fn3 () {}

new function () {
  iifs[i] = `iif${i++}`
}()

export const iifObj = new function () {
  this.a = 1
  this.b = 2
  this.constructor.prototype.sum = function () {
    return this.a + this.b
  }
}()

export const iifCall = function (n) {
  this.push(n)
  return this
}.call([1], 2)

const evalStr = 'eval'
eval('evalFn = function(){return evalStr}')
export let evalFn

export let literalFn = new Function('a,b', 'return a+b')

export function L (str) {
  const mKey = str.trim()
  if (L[mKey]) return L[mKey]
  const splitted = str.split('=>')
  return L[mKey] = new Function(splitted[0], `return (${splitted[1]})`)
}
