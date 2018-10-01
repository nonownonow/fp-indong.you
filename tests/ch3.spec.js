import * as x from '../src/ch3'
import * as _ from 'underscore'
import * as lodash from 'lodash'
import cheerio from 'cheerio'

describe('3 learn the fundmental of functional javascript by creating underscore.js yourself', () => {
  const arrayLike = { '0': 1, '1': 2, '2': 3, length: 3 }
  describe(`3.1 about underscore.js`, () => {
    describe('3.1.1 getting start underscore.js', () => {
      const list = [1, 2, 3, 4, 5, 6]

      const users = [
        { id: 1, name: 'ID', age: 32 },
        { id: 2, name: 'HA', age: 25 },
        { id: 3, name: 'BJ', age: 32 }
      ]

      it('try out _.each simply', () => {
        const fn = jest.fn(v => v)
        const $ = cheerio.load('<ul><li>1</li><li>2</li><li>3</li></ul>')
        const co = [1, 2, 3]
        const obj = { a: 1, b: 2, c: 3 }
        const lis = $('li')
        expect(_.each(co, fn)).toEqual([1, 2, 3])
        expect(fn.mock.calls.length).toBe(3)
        expect(fn.mock.calls[0][2]).toEqual([1, 2, 3])
        fn.mockClear()
        expect(_.each(lis, fn))
        expect(fn.mock.calls.length).toBe(3)
        fn.mockClear()
        expect(_.each(obj, fn))
        expect(fn.mock.calls.length).toBe(3)
        fn.mockClear()
        expect(co.forEach(fn)).toBeUndefined()
        expect(fn.mock.calls.length).toBe(3)
        expect(fn.mock.calls[0][2]).toEqual([1, 2, 3])
      })
      it('_.reject, _.contains, _.isArray', () => {
        expect(_.reject(list, v => v % 2 === 0)).toEqual([1, 3, 5])
        expect(list).toEqual([1, 2, 3, 4, 5, 6])
        expect(_.contains(list, 3)).toBe(true)
        expect(_.isArray(list)).toBe(true)
        expect(_.isArray(arrayLike)).toBe(false)
      })
      it('_.pluck, _.first, _.last,_.rest, _.lastIndexOf', () => {
        expect(_.pluck(users, 'name')).toEqual(['ID', 'HA', 'BJ'])
        expect(_.first(list)).toBe(1)
        expect(_.first(list, 1)).toEqual([1])
        expect(_.first(list, 2)).toEqual([1, 2])
        expect(_.last(list)).toBe(6)
        expect(_.last(list, 2)).toEqual([5, 6])
        expect(_.rest(list)).toEqual([2, 3, 4, 5, 6])
        expect(_.rest(list, 2)).toEqual([3, 4, 5, 6])
        expect(_.initial(list)).toEqual([1, 2, 3, 4, 5])
        expect(_.initial(list, 2)).toEqual([1, 2, 3, 4])
        expect(_.lastIndexOf([1, 2, 3, 1, 2, 3], 2)).toBe(4)
        expect(_.lastIndexOf([1, 2, 3, 1, 2, 3], 3)).toBe(5)
        expect(_.lastIndexOf([1, 2, 3, 1, 3], 2)).toBe(1)
        expect(_.flatten([[1, 2, 3], [4, 5], 6])).toEqual([1, 2, 3, 4, 5, 6])
      })
      it('_.values, _.keys, _.extend, _.pick, _.omit', () => {
        let obj = { id: 1, name: 'id', age: 32 }
        let obj2 = { age: 36, job: 'developer' }

        expect(_.values(obj)).toEqual([1, 'id', 32])
        expect(_.keys(obj)).toEqual(['id', 'name', 'age'])

        expect(_.extend(obj, obj2)).toEqual({ id: 1, name: 'id', age: 36, job: 'developer' })
        expect(_.pick(obj, 'name', 'job')).toEqual({ name: 'id', job: 'developer' })
        obj = { id: 1, name: 'id', age: 32 }
        obj2 = { age: 36, job: 'developer' }
        expect(_.extend({}, obj, obj2)).toEqual({ id: 1, name: 'id', age: 36, job: 'developer' })
        expect(obj).toEqual({ id: 1, name: 'id', age: 32 })
        expect(_.omit(obj, 'name')).toEqual({ id: 1, age: 32 })
      })
      it('_.negate', () => {
        function eq5 (n) {
          return n === 5
        }
        const neq5 = _.negate(eq5)
        expect(eq5(5)).toBe(true)
        expect(neq5(5)).toBe(false)
      })
      it('_.noop', () => {
        expect(_.noop()).toBeUndefined()
        expect(_.noop(4)).toBeUndefined()
      })
    })
    describe('3.1.2 underscore.js vs lodash', () => {})
    describe('3.1.3 lazy evaluation1 "take"', () => {
      const size = 200
      const list = _.range(size)
      let fn
      // afterEach(() => {
      //   jest.resetAllMocks()
      // })
      it('c3-10', () => {
        const list = _.range(50)
        let fn
        expect(_.chain(list)
          .filter(fn = jest.fn(v => v % 2 === 0))
          .take(5)
          .value()).toEqual([0, 2, 4, 6, 8])
        expect(fn.mock.calls.length).toBe(50)
        fn.mockClear()
        // todo : 로데시의 내부 구조가 변경되어서 적은 수에서도 지연평가가 작동되는 듯 함.
        // expect(lodash.chain(list)
        //   .filter(fn = jest.fn(v => v % 2 === 0))
        //   .take(5)
        //   .value()).toEqual([0, 2, 4, 6, 8])
        // expect(fn.mock.calls.length).toBe(50)
      })
      it('c3-12', () => {
        expect(_.chain(list)
          .filter(fn = jest.fn(v => v % 2 === 0))
          .take(5)
          .value()).toEqual([0, 2, 4, 6, 8])
        expect(fn.mock.calls.length).toBe(size)
        fn.mockClear()
        // todo : 로데시의 내부 구조가 변경되어서 적은 수에서도 지연평가가 작동되는 듯 함.
        expect(lodash.chain(list)
          .filter(fn = jest.fn(v => v % 2 === 0))
          .take(5)
          .value()).toEqual([0, 2, 4, 6, 8])
        expect(fn.mock.calls.length).toBe(9)
      })
      it('c3-13', () => {
        let list2 = []
        const limit = 5
        _.find(list, fn = jest.fn(v => {
          return v % 2 === 0 && list2.push(v) === limit
        }))
        expect(list2).toEqual([0, 2, 4, 6, 8])
        expect(fn.mock.calls.length).toBe(9)
      })
      it('c3-14 _.filter that can get out of the middle', () => {
        let predicate = jest.fn(v => v % 2 === 0)
        expect(x.filter2(list, predicate, 5)).toEqual([0, 2, 4, 6, 8])
        expect(predicate.mock.calls.length).toBe(9)
        expect(predicate.mock.calls[0][2]).toEqual(list)
        predicate = jest.fn(function (v) { return v % this.a === 0 })
        expect(x.filter2(list, predicate, 5, { a: 2 })).toEqual([0, 2, 4, 6, 8])
        _.filter2 = x.filter2
        _.mixin(_)
        expect(_.filter2(list, predicate, 5, { a: 2 })).toEqual([0, 2, 4, 6, 8])
        expect(_.chain(list)
          .filter2(predicate, 5, { a: 2 })
          .value()
        ).toEqual([0, 2, 4, 6, 8])
      })
    })
    describe('3.1.4 lazy evaluation2 "map"', () => {
      // function mul10 (n) { n * 10 }
      // function sub10 (n) { n - 10 }
      // function square (n) { n * n }
      // const list = [1, 2, 3, 4, 5]
      // const res = _.chain(list).map(mul10).map(sub10).map(square).value()
      // const res1 = _.map(list, v => mul10(sub10(square(v))))
      // const res2 = _.map(list, _.compose(mul10, sub10, square))
    })
    describe('3.1.6 show each in functional angle', () => {
      it(`c3-20 difference of "each" in 'underscore' and 'lodash'`, () => {
        const fn = jest.fn(v => v < 2)
        _.each([1, 2, 3, 4, 5], fn)
        expect(fn.mock.calls.length).toBe(5)
        fn.mockClear()
        lodash.each([1, 2, 3, 4, 5], fn)
        expect(fn.mock.calls.length).toBe(2)
      })
    })
  })
  describe(`3.2 create _.map and _.each`, () => {})
  describe(`3.3 _.filter _.reject _.find _.some _.every`, () => {})
  describe(`3.4 _.reduce`, () => {})
  describe(`3.5 develope more`, () => { })
})

// function* genUsers(n){
//   for(let i=0; i<n; i++){

//   }
// }
