const _ = require('partial-js')
const cheerio = require('cheerio')
export const hi = _.each(console.log)

export const sql = {
  insert (table, data) {
    data = wrap_array(data)
    const columns = _.go(data, _.map(_.keys), _.flatten, _.uniq)
    const defaults = _.object(_.map(columns, v => [v, '"DEFAULT"']))

    return `insert into "${table}" ("${columns.join('","')}") values ${_.map(data, __(_.idtt,
      _.map_object(v => _.isString(v) ? `"${v}"` : v),
      v => _.extend({}, defaults, v),
      _.values,
      v => `(${v.join(',')})`
    )).join(',')}`
  }
}

function wrap_array (data) {
  return _.isArray(data) ? data : [data]
}

export function invite (chat_id, users) {
  return __(
    _.map((chat_id, v) => ({ 'user_id': v.id, 'chat_id': chat_id })),
    _(sql.insert, 'chat_users')
  )(...arguments)
}

export function order_price (products, size_name) {
  return products.price + _.find_where(products.sizes, { name: size_name }).price
}

export const is_matched = _.every((a, v, k) => a[k] === v)

export function find_where (coll, attrs) {
  return _.find(coll, __(_.identity, _.partial(is_matched, _, attrs)))
}

export const total_quantity = _.reduce((r, v) => {
  return _.reduce(v.sizes, (r, v) => r + v.quantity, r)
}, 0)

export const selected_total_quantity = __(
  _.filter('is_selected'),
  total_quantity
)
