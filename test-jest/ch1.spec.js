import * as x from '../src/ch1'

const users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 }
]

class User {
  constructor (id, name, age) {
    this.id = id
    this.name = name
    this.age = age
  }
  getId () {
    return this.id
  }
  getName () {
    return this.name
  }
  getAge () {
    return this.age
  }
}
const users2 = [
  new User(1, 'ID', 32),
  new User(2, 'HA', 25),
  new User(3, 'BJ', 32),
  new User(4, 'PJ', 28),
  new User(5, 'JE', 27),
  new User(6, 'JM', 32),
  new User(7, 'HI', 24)
]

describe('ch1', () => {
  describe('filter', () => {
    it('filter user who are under 30 years of age', () => {
      expect(x.filterUnder30AgeSize(users)).toBe(4)
      expect(x.filterUnder30AgeSize2(users)).toBe(4)
    })
  })
  describe('map', () => {
    it('extract name in user who are 30andOver', () => {
      expect(x.mapName30andOverUsersSize(users)).toBe(3)
    })
  })
  describe('find', () => {
    const predicate = jest.fn(v => v.id === 3)
    it('findById is refacot filter function', () => {
      expect(x.findBy('id', users, 3)).toEqual(users[2])
      expect(x.findBy('id', users, 5)).toEqual(users[4])
    })
    it('findByName is refactor filter function which has name parameter', () => {
      expect(x.findBy('name', users, 'BJ')).toEqual(users[2])
      expect(x.findBy('name', users, 'JE')).toEqual(users[4])
    })
    it('findByAge is refactor filter function which has age parameter', () => {
      expect(x.findBy('age', users, 28)).toEqual(users[3])
      expect(x.findBy('age', users, 25)).toEqual(users[1])
    })
    it('find user who are pass the predicate function', () => {
      expect(x.find(users, predicate)).toEqual({ id: 3, name: 'BJ', age: 32 })
      expect(x.find(users2, v => v.getAge() === 25).getName()).toBe('HA')
    })
    it('predicate in find is called just until find the element', () => {
      expect(predicate.mock.calls.length).toBe(3)
    })
  })
})
