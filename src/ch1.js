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
  return getLength(
    map(
      filter(users, user => user.age < 30),
      user => user.age
    )
  )
}

export function mapName30andOverUsersSize (users) {
  return getLength(
    map(
      filter(users, user => user.age >= 30),
      user => user.name
    )
  )
}

function getLength (arr) {
  return arr.length
}
