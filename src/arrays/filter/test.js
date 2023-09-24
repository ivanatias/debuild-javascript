import { filter } from './index.js'
import arr from '../samples.js'
import { describe, test } from 'node:test'
import { deepStrictEqual, throws } from 'node:assert'

describe('filter', () => {
  test('should throw if callback is not a function', () => {
    throws(() => filter(arr, 'not a function'), TypeError)
  })

  test('should return the expected new array', () => {
    deepStrictEqual(
      filter(arr, item => item.name === 'asparagus'),
      [{ name: 'asparagus', type: 'vegetables', quantity: 5 }]
    )
  })

  test('should not mutate the original array', () => {
    filter(arr, item => item.name === 'asparagus')
    deepStrictEqual(arr, [
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
      { name: 'bananas', type: 'fruit', quantity: 0 },
      { name: 'goat', type: 'meat', quantity: 23 },
      { name: 'cherries', type: 'fruit', quantity: 5 },
      { name: 'fish', type: 'meat', quantity: 22 }
    ])
  })
})
