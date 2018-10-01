import * as _ from 'underscore'

export function filter2 (list, fn, limit = list.length, context) {
  const res = []
  _.find(list, (v, i, c) => fn.call(context, v, i, c) && res.push(v) === limit)
  return res
}

export function printBool (v) {
  return Boolean(v)
}
