const users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 }
]

let temp_users = []
const ages = []
const names = []
for (let i = 0; i < users.length; i++) {
  const user = users[i]
  const age = user.age
  if (age < 30) {
    ages.push(age)
    temp_users.push(user)
  }
}
console.log(temp_users.length)
console.log(ages)

temp_users = []
for (let i = 0; i < users.length; i++) {
  const user = users[i]
  let name = ''
  if (user.age >= 30) {
    name = user.name
    temp_users.push(user)
    names.push(name)
  }
}
console.log(temp_users.length)
console.log(names)
