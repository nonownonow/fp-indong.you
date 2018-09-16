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
      v => v.age
    )
  )
}

export function mapName30andOverUsersSize (users) {
  return get_length(
    map(
      filter(users, v => v.age >= 30),
      v => v.name
    )
  )
}

function get_length (arr) {
  return arr.length
}
