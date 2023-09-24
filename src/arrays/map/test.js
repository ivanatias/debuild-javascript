import { map } from './index.js'
import arr from '../samples.js'
import { describe, test } from 'node:test'
import { deepStrictEqual, throws } from 'node:assert'

describe('map', () => {
  test('should throw if callback is not a function', () => {
    throws(() => map(arr, 'not a function'), TypeError)
  })

  test('should return the expected new array', () => {
    deepStrictEqual(
      map(arr, item => item.name),
      ['asparagus', 'bananas', 'goat', 'cherries', 'fish']
    )
  })

  test('should not mutate the original array', () => {
    map(arr, item => item.name)
    deepStrictEqual(arr, [
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
      { name: 'bananas', type: 'fruit', quantity: 0 },
      { name: 'goat', type: 'meat', quantity: 23 },
      { name: 'cherries', type: 'fruit', quantity: 5 },
      { name: 'fish', type: 'meat', quantity: 22 }
    ])
  })
})
