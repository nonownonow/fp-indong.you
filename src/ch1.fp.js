const users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 }
]

function filter (arr, predicate) {
  const resArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    const arrEl = arr[i]
    if (predicate(arrEl)) {
      resArr.push(arrEl)
    }
  }
  return resArr
}

console.log(filter(users, user => {
  return user.age < 30
}))
