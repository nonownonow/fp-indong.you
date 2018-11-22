import * as x from '../src/ch7'
const _ = require('partial-js')
const expect = require('expect')
describe.only('ch7', () => {
  describe('7.1 _.each, _.map', () => {
    it('use _.each instead of if', () => {
      expect(x.hi(undefined)).toBe(undefined)
      expect(x.hi([1])).toEqual([1])
    })
  })
  describe('7.1.3', () => {
    it('7.8', () => {
      expect(x.sql.insert('files', {
        name: 'image.png',
        type: 'image/png'
      })).toBe(`insert into "files" ("name","type") values ("image.png","image/png")`)
      expect(x.sql.insert('files', [
        { name: 'image.png', type: 'image/png' },
        { type: 'image/jpeg', name: 'image1.jpg' },
        { type: 'image/png' }
      ])).toBe(`insert into "files" ("name","type") values ("image.png","image/png"),("image1.jpg","image/jpeg"),("DEFAULT","image/png")`)
    })
  })
  describe('7.1.4', () => {
    it('7.9 invite to group chatting', () => {
      expect(x.invite(8, [{ id: 1, name: 'id' }, { id: 5, name: 'pj' }, { id: 6, name: 'bj' }])).toBe('insert into "chat_users" ("user_id","chat_id") values (1,8),(5,8),(6,8)')
    })
  })
})
