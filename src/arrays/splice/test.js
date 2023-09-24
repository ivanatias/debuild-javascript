import { splice } from './index.js'
import arr from '../samples.js'
import { describe, test } from 'node:test'
import { deepStrictEqual } from 'node:assert'

// splice uses slice method under the hood

describe('splice', () => {
  test('should return an array of removed elements mutating the original array and adding new items', () => {
    deepStrictEqual(splice(arr, 0, 2, { name: 'Something new' }), [
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
      { name: 'bananas', type: 'fruit', quantity: 0 }
    ])

    deepStrictEqual(arr, [
      { name: 'Something new' },
      { name: 'goat', type: 'meat', quantity: 23 },
      { name: 'cherries', type: 'fruit', quantity: 5 },
      { name: 'fish', type: 'meat', quantity: 22 }
    ])
  })
})
