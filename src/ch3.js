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
  if (Object.values) return Object.values(data)
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

function bloop (new_data, create_body) {
  return (data, iterator) => {
    const newData = new_data(data)

    if (isArrayLike(data)) {
      for (let i = 0, len = data.length; i < len; i++) {
        create_body(iterator(data[i], i, data), newData, data[i])
      }
    } else {
      for (let key of keys(data)) {
        create_body(iterator(data[key], key, data), newData, data[key])
      }
      // for (let i = 0, k = keys(data), len = k.length; i < len; i++) {
      //   create_body(iterator(data[k[i]], k[i], data), newData)
      // }
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
  return bloop(
    () => [],
    (res, newData, v) => {
      if (res) newData.push(v)
    }
  )(...arguments)
}
