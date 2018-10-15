const _ = require('partial-js')
const expect = require('expect')

describe(`ch5`, () => {
  const products = [
    { id: 1, name: '후드 집업', discounted_price: 6000, price: 10000 },
    { id: 2, name: '코잼 후드티', discounted_price: 8000, price: 8000 },
    { id: 3, name: 'A1 반팔티', discounted_price: 6000, price: 6000 },
    { id: 4, name: '코잼 반팔티', discounted_price: 5000, price: 6000 }
  ]
  describe(`_.go`, () => {
    it(`with anonymous function`, () => {
      expect(_.go(10,
        a => a * 10,
        a => a - 50,
        a => a + 10
      )).toBe(60)
    })
    it('send multiple parameter by using _.mr', () => {
      expect(_.go(
        10,
        a => _.mr(a * 10, 50),
        (a, b) => a - b,
        a => a + 10
      )).toBe(60)
      expect(_.go(
        _.mr(2, 3),
        (a, b) => a + b,
        a => a * a
      )).toBe(25)
    })
  })
  describe('_.pipe', () => {
    it('_.pipe', () => {
      function add (a, b) {
        return _.mr(a + b)
      }
      function square (a) {
        return a * a
      }
      expect(_.pipe(add, square)(1, 2)).toBe(9)
    })
  })
  describe('5.1.4 compose with partially curring function', () => {
    it('c5-6', () => {
      expect(_.go(
        products,
        _.filter(v => v.discounted_price < v.price),
        _.sortBy('discounted_price'),
        _.first,
        _.val('name')
      )).toBe('코잼 반팔티')
    })
    it('c5-8 compose with _.go', () => {
      expect(_.go(
        products,
        _.reject(v => v.discounted_price < v.price),
        _.sortBy('discounted_price'),
        _.first,
        _.val('id')
      )).toBe(3)
      expect(_.go(
        products,
        _.filter(v => v.discounted_price < v.price),
        _.sortBy('discounted_price'),
        _.last,
        _.val('name')
      )).toBe('후드 집업')
      expect(_.go(
        products,
        _.filter(v => v.discounted_price < v.price),
        _.min(v => v.discounted_price - v.price),
        _.val('name')
      )).toBe('후드 집업')
    })
  })
  describe('5.1.5 create helper function by using pipline', () => {
    it('5-9', () => {
      expect(_.go(
        products,
        _.filter(v => v.discounted_price < v.price),
        // _.map(v => _.go(v, _.idtt, _.pick(['id', 'name']), _.values))
        _.map(__(_.idtt, _.pick(['id', 'name']), _.values))
      )).toEqual([[1, '후드 집업'], [4, '코잼 반팔티']])
    })
    it('5-12', async () => {
      function add (a, b, next) {
        setTimeout(() => {
          next(a + b)
        }, 10)
      }
      function sub (a, b, next) {
        setTimeout(() => {
          next(a - b)
        }, 15)
      }
      function mul (a, b, next) {
        setTimeout(() => {
          next(a * b)
        }, 25)
      }

      expect(await _.go(
        _.mr(5, 10),
        _.callback((a, b, next) => add(a, b, next)),
        _.callback((a, next) => sub(a, 10, next)),
        _.callback((a, next) => mul(a, 10, next))
      )).toBe(50)
      expect(await _.go(
        _.mr(5, 10),
        _.callback(
          add,
          _(sub, _, 10),
          _(mul, 10)
        )
      )).toBe(50)
    })
    it('test', async () => {
      var add = _.callback(function (a, b, next) {
        setTimeout(function () {
          next(a + b)
        }, 100)
      })

      var sub = _.callback(function (a, b, next) {
        setTimeout(function () {
          next(a - b)
        }, 100)
      })

      var mul = _.callback(function (a, b, next) {
        setTimeout(function () {
          next(a * b)
        }, 100)
      })
      expect(await _.go(
        _.mr(5, 10),
        add,
        _(sub, _, 10),
        _(mul, 10)
      )).toBe(50)
    })
  })
  describe('5.1.7 to stopping in the middle and exiting', () => {
    it('5-16 to exiting from pipeline', () => {
      expect(_.go(
        null,
        () => 1,
        () => 2,
        _.stop,
        () => 3,
        () => 4
      )).toBe(2)
    })
    it('5-18 _.map', async () => {
      expect(_.map([1, 2, 3], v => v)).toEqual([1, 2, 3])
      expect(await _.map([1, 2, 3], v => new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(v)
        }, 100)
      }))).toEqual([1, 2, 3])
    })
    it('5-19 compose through sync function and async function by using pipelinee', async () => {
      function promiseFn (v) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(v)
          }, 100)
        })
      }
      function callbackFn (v, next) {
        setTimeout(() => {
          next(v)
        })
      }
      expect(await _.go(
        [1, 2, 3],
        v => v,
        promiseFn,
        _.callback(callbackFn)
      )).toEqual([1, 2, 3])
    })
    function is_1_async (a) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(a == 1), 100)
      })
    }
    function is_2_async (a) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(a == 2), 100)
      })
    }
    it('5-25 _.if().else_if().else', async () => {
      const testFn = _.if(
        is_1_async, _.constant('1입니다')
      ).else_if(
        is_2_async, _.constant('2입니다')
      ).else(
        _.constant('1도 아니고 2도 아닙니다.')
      )
      expect(await testFn(2)).toBe('2입니다')
    })
    it('5-26 use _.if with _.constant, arrow function, _.go', async () => {
      const test5 =
        _.if(is_1_async, _.constant('is 1'))
          .else_if(is_2_async, _.constant('is 2'))
          .else(_.constant('isnt 1 and isnt 2'))
      expect(await test5(1)).toEqual('is 1')
      expect(await _.go(
        3,
        _.if(is_1_async, _.c('is 1'))
          .else_if(is_2_async, _.c('is 2'))
          .else(_.c('isnt 1 and isnt 2'))
      )).toBe('isnt 1 and isnt 2')
    })
  })
})
