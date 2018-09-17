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
})
