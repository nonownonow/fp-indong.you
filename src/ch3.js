import * as _ from 'underscore'

export function filter2 (list, fn, limit = list.length, context) {
  const res = []
  _.find(list, (v, i, c) => fn.call(context, v, i, c) && res.push(v) === limit)
  return res
}

export function printBool (v) {
  return Boolean(v)
}

export const list1 = {
  '1': 1,
  '2': 2,
  '3': 3,
  length: 3,
  pop () {
    delete this[this.length-- - 1]
  }
}

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1
export function isArrayLike (data) {
  const length = getLength(data)
  return typeof length === 'number' && length >= 0 && length < MAX_ARRAY_INDEX
}

export function getLength (data) {
  return data == null ? void 0 : data.length
}

export function identity (v) {
  return v
}

export const idtt = identity

export function values (data) {
  return map(data, identity)
}
export function argN (n) {
  return (...res) => res[n]
}

export const arg0 = argN(0)
export const arg1 = argN(1)

export function keys (data) {
  return isObject(data) ? Object.keys(data) : []
}

export const each = bloop(idtt, noop)

export const map = bloop(array, push_to)

function bloop (new_data, create_body, stopper) {
  return (data, iterator) => {
    const newData = new_data(data)

    if (isArrayLike(data)) {
      for (let i = 0, len = data.length; i < len; i++) {
        const memo = iterator(data[i], i, data)
        if (!stopper) create_body(memo, newData, data[i])
        else if (stopper(memo)) create_body(memo, newData, data[i])
      }
    } else {
      for (let key of keys(data)) {
        const memo = iterator(data[key], key, data)
        if (!stopper) create_body(memo, newData, data[key])
        else if (stopper(memo)) create_body(memo, newData, data[key])
      }
    }
    return newData
  }
}

export function array () {
  return []
}

export function push_to (v, arr) {
  arr.push(v)
  return v
}

export function noop () {}

export function isFunction (target) {
  return typeof target === 'function'
}

export function isObject (target) {
  const type = typeof target
  return type === 'function' || type === 'object' && !!target
}

export function has (obj, key) {
  return obj != null && hasOwnProperty.call(obj, key)
}

// export function filter (arr, predicate) {
//   const newArr = []
//   each(arr, v => {
//     if (predicate(v)) newArr.push(v)
//   })
//   return newArr
// }

export function filter () {
  return bloop(array, cond(identity, rester(push)))(...arguments)
}

export function find () {
  return bloop(noop, rester(idtt, 2), idtt)(...arguments)
}
export function negate (fn) {
  return () => !fn(...arguments)
}
export function not (v) {
  return !v
}
export function reject () {
  return bloop(
    array,
    // cond(negate(identity), rester(push))
    // cond(identity, noop, rester(push))
    cond(not, rester(push))
  )(...arguments)
}
export function push (arr, v) {
  arr.push(v)
  return arr
}
export function constant (data) {
  return () => data
}
export function toArray () {
  // return Array.isArray(data) ? data : values(data)
  return cond(Array.isArray, identity, values)(...arguments)
}
export function rest (data, num = 1) {
  return toArray(data).slice(num)
}
export function reverse (data) {
  return toArray(data).reverse()
}
export function rester (fn, num = 1) {
  return (...args) => fn(...rest(args, num))
}
export function cond (validator, func, alter) {
  return (...args) => {
    return validator(...args) ? func(...args) : alter && alter(...args)
  }
}
export function square (n) {
  return cond(n => toString.call(n) === '[object Number]', n => n * n, constant(0))(...arguments)
}
