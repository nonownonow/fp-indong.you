export function filter (arr, predicate) {
  const newArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    const el = arr[i]
    if (predicate(el)) newArr.push(el)
  }
  return newArr
}

export function findById (list, id) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i].id === id) return list[i]
  }
}

export function findByName (list, name) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i].name === name) return list[i]
  }
}

export function findByAge (list, age) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i].age === age) return list[i]
  }
}

export function findBy (key, list, value) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i][key] === value) return list[i]
  }
}

export function find (arr, predicate) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (predicate(arr[i])) {
      return arr[i]
    }
  }
}

export function map (arr, mapper) {
  const newArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    newArr.push(mapper(arr[i]))
  }
  return newArr
}

export function filterUnder30AgeSize (users) {
  return get_length(
    map(
      filter(users, v => v.age < 30),
      bValue('age')
    )
  )
}

export function filterUnder30AgeSize2 (users) {
  return get_length(
    bValues('age')(
      filter(users, under_30)
    )
  )
  function under_30 (v) {
    return v.age < 30
  }
}

export function mapName30andOverUsersSize (users) {
  return get_length(
    map(
      filter(users, v => v.age >= 30),
      bValue('name')
    )
  )
}

function get_length (arr) {
  return arr.length
}

function bValue (key) {
  return obj => obj[key]
}

function bValues (key) {
  return obj => map(obj, bValue(key))
}
