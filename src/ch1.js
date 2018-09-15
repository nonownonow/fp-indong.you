export function filterUnder30 (arr) {
  const newArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i].age < 30) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

export function filter30andOvere (arr) {
  const newArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i].age >= 30) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

export function mapAge (arr) {
  const newArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    newArr[i] = arr[i].age
  }
  return newArr
}

export function mapName (arr) {
  const newArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    newArr[i] = arr[i].name
  }
  return newArr
}
