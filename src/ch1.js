export function filter (arr, predicate) {
  const newArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    const el = arr[i]
    if (predicate(el)) newArr.push(el)
  }
  return newArr
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
