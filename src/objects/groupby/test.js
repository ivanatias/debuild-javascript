import { groupBy } from './index.js'
import { arr } from '../samples.js'
import { describe, test } from 'node:test'
import { deepStrictEqual, throws } from 'node:assert'

describe('groupBy', () => {
  test('should throw if callback is not a function', () => {
    throws(() => groupBy(arr, 'not a function'), TypeError)
  })

  test('should return expected object with grouped values', () => {
    deepStrictEqual(
      groupBy(arr, item => (item.quantity > 5 ? 'ok' : 'restock')),
      {
        restock: [
          { name: 'asparagus', type: 'vegetables', quantity: 5 },
          { name: 'bananas', type: 'fruit', quantity: 0 },
          { name: 'cherries', type: 'fruit', quantity: 5 }
        ],
        ok: [
          { name: 'goat', type: 'meat', quantity: 23 },
          { name: 'fish', type: 'meat', quantity: 22 }
        ]
      }
    )
  })

  test('should return an empty object if callback does not return a value that can be coerced to a property key', () => {
    deepStrictEqual(
      groupBy(arr, () => null),
      {}
    )
  })
})
