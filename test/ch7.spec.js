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
      expect(x.invite(8, [{ id: 1, name: 'id' }, { id: 5, name: 'pj' }, {
        id: 6,
        name: 'bj'
      }])).toBe('insert into "chat_users" ("user_id","chat_id") values (1,8),(5,8),(6,8)')
    })
  })
  describe('7.3.2', () => {
    const products = [
      {
        id: 1,
        name: '반팔티',
        price: 10000, // <--- 상품의 기본 가격
        sizes: [
          { name: 'M', price: 0 },
          { name: 'L', price: 0 },
          { name: 'XL', price: 0 },
          { name: '2XL', price: 1000 } // <--- 해당 상품의 사이즈별 추가 금액
        ]
      },
      {
        id: 2,
        name: '후드티',
        price: 21000,
        sizes: [
          { name: 'L', price: -1000 },
          { name: 'XL', price: 0 },
          { name: '2XL', price: 3000 }
        ]
      },
      {
        id: 3,
        name: '맨투맨',
        price: 16000,
        sizes: [
          { name: 'L', price: 0 },
          { name: 'XL', price: 0 },
          { name: '2XL', price: 2000 }
        ]
      }
    ]
    describe('order_price', () => {
      it('select price about choosen products and choosen option', () => {
        expect(x.order_price(products[0], 'XL')).toBe(10000)
      })
    })
    describe('is_match', () => {
      it('check the object is matched with attrs', () => {
        expect(x.is_matched(products[0], { id: 1, price: 10000 })).toBe(true)
        expect(x.is_matched(products[0], { id: 2, price: 10000 })).toBe(false)
      })
    })
    describe('find_where', () => {
      it('it find the object in coll with attrs', () => {
        // expect(x.find_where([{ id: 1, name: 'ID' }, { id: 2, name: 'CJ' }], { id: 1 })).toEqual({ id: 1, name: 'ID' })
        expect(x.find_where(products[1].sizes, { name: 'XL' })).toEqual({ name: 'XL', price: 0 })
      })
    })
  })
  describe.only('7-3-3 sum the quantity of items in basket', () => {
    const products = [
      {
        is_selected: true, // <--- 장바구니에서 체크 박스 선택
        name: '반팔티',
        price: 10000, // <--- 기본 가격
        sizes: [ // <---- 장바구니에 담은 동일 상품의 사이즈 별 수량과 가
          { name: 'L', quantity: 2, price: 0 },
          { name: 'XL', quantity: 3, price: 0 },
          { name: '2XL', quantity: 2, price: 2000 } // <-- 옵션의 추가 가격
        ]
      },
      {
        is_selected: true,
        name: '후드티',
        price: 21000,
        sizes: [
          { name: 'L', quantity: 3, price: -1000 },
          { name: '2XL', quantity: 1, price: 2000 }
        ]
      },
      {
        is_selected: false,
        name: '맨투맨',
        price: 16000,
        sizes: [
          { name: 'L', quantity: 4, price: 0 }
        ]
      }
    ]
    describe('7-22 sum the quantity of item selected', () => {
      it('selected_total_quantity', () => {
        expect(x.selected_total_quantity(products)).toBe(11)
      })
    })
    describe('7-25 sum the price of items selected', ()=>{
      it('total_price', ()=>{
        expect(x.total_price(products)).toBe(221000)
      })
    })
    describe('7-26', ()=>{
      it('total', ()=>{
        expect(x.total(products)).toEqual({quantity:15, price: 221000})
      })
    })
  })
})
