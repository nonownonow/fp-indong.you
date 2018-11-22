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
