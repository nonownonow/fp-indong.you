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
      expect(x.filterUnder30(users).length).toBe(4)
    })
    it('filter user who are 30 and over of age', () => {
      expect(x.filter30andOvere(users).length).toBe(3)
    })
  })
  describe('map', () => {
    it('extract age in user', () => {
      expect(x.mapAge(users)).toEqual([32, 25, 32, 28, 27, 32, 24])
    })
    it('extract name in user', () => {
      expect(x.mapName(users).slice(0, 2)).toEqual(['ID', 'HA'])
    })
  })
})
